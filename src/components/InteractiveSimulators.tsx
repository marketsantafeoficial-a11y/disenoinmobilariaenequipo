import React, { useState } from 'react';
import { 
  Zap, 
  Radar, 
  Handshake, 
  MessageSquare, 
  Send, 
  MapPin, 
  Building2, 
  ExternalLink, 
  Share2, 
  CheckCircle2,
  Sparkles,
  Flame,
  Search,
  Filter,
  Check,
  TrendingUp,
  User
} from 'lucide-react';
import { MOCK_CLIENT_SEARCHES, DEMAND_ZONES, RONDA_MESSAGES_DEMO } from '../data/mockData';
import { RondaMessage } from '../types';

interface InteractiveSimulatorsProps {
  onOpenTrial: () => void;
  onOpenWhatsAppPreview: (searchId: string) => void;
}

export const InteractiveSimulators: React.FC<InteractiveSimulatorsProps> = ({
  onOpenTrial,
  onOpenWhatsAppPreview
}) => {
  const [activeSimulator, setActiveSimulator] = useState<'matching' | 'radar' | 'ronda'>('matching');

  // Matching Simulator State
  const [selectedSearchId, setSelectedSearchId] = useState(MOCK_CLIENT_SEARCHES[0].id);
  const activeSearch = MOCK_CLIENT_SEARCHES.find(s => s.id === selectedSearchId) || MOCK_CLIENT_SEARCHES[0];
  const [propStatuses, setPropStatuses] = useState<Record<string, string>>({
    'prop-1': 'Interesado',
    'prop-2': 'Sin respuesta',
    'prop-3': 'Sin respuesta',
    'prop-4': 'Sin respuesta',
    'prop-5': 'No interesado',
    'prop-201': 'Interesado',
    'prop-301': 'Visita coordinada'
  });

  // Radar Simulator State
  const [selectedZone, setSelectedZone] = useState(DEMAND_ZONES[0]);

  // Ronda Chat State
  const [messages, setMessages] = useState<RondaMessage[]>(RONDA_MESSAGES_DEMO);
  const [inputMsg, setInputMsg] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const newMsg: RondaMessage = {
      id: `msg-${Date.now()}`,
      sender: 'Vos (Inmobiliaria en Equipo)',
      agency: 'Mi Inmobiliaria',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputMsg,
      isMe: true
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMsg('');

    // Simulate colleague answer after 1s
    setTimeout(() => {
      const reply: RondaMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'Agustín Duarte',
        agency: 'Duarte Propiedades',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Excelente! Te reservo el horario y ya le aviso al propietario para tener la casa impecable.',
        isMe: false
      };
      setMessages(prev => [...prev, reply]);
    }, 1200);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Experiencia Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Probá las herramientas <br className="hidden sm:inline" />
            <span className="text-blue-600">en tiempo real</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            Interactuá con los simuladores en vivo de Matching, Radar de Demanda y Ronda de Negocios.
          </p>

          {/* Selector Tabs for 3 Simulators */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mt-8 gap-1 shadow-inner">
            <button
              onClick={() => setActiveSimulator('matching')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeSimulator === 'matching'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>1. Matching de Propiedades</span>
            </button>

            <button
              onClick={() => setActiveSimulator('radar')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeSimulator === 'radar'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Radar className="w-4 h-4" />
              <span>2. Radar de Demanda</span>
            </button>

            <button
              onClick={() => setActiveSimulator('ronda')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeSimulator === 'ronda'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Handshake className="w-4 h-4" />
              <span>3. Ronda & Chat B2B</span>
            </button>
          </div>
        </div>

        {/* 1. MATCHING SIMULATOR */}
        {activeSimulator === 'matching' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl animate-in fade-in duration-300">
            
            {/* Top Bar with Client Selection */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Cliente seleccionado para análisis:
                </span>
                <div className="flex flex-wrap gap-2">
                  {MOCK_CLIENT_SEARCHES.map(search => (
                    <button
                      key={search.id}
                      onClick={() => setSelectedSearchId(search.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedSearchId === search.id
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {search.clientName} ({search.zone})
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => onOpenWhatsAppPreview(activeSearch.id)}
                  className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ver Ficha WhatsApp</span>
                </button>
                <button
                  onClick={onOpenTrial}
                  className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  <span>Re-enviar Historial</span>
                </button>
              </div>
            </div>

            {/* Client Context Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5 rounded-2xl mb-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black">{activeSearch.name}</h3>
                  <p className="text-xs text-blue-100 mt-1">
                    {activeSearch.searchType} · {activeSearch.zone}, {activeSearch.city} · Presupuesto: USD {activeSearch.budgetMin.toLocaleString()} - {activeSearch.budgetMax.toLocaleString()} · {activeSearch.bedrooms} Dorms
                  </p>
                </div>
                <div className="flex items-center gap-4 text-center">
                  <div className="bg-white/15 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                    <span className="block text-base font-black">{activeSearch.matchedProperties.length}</span>
                    <span className="text-[10px] text-blue-200 uppercase">Enviadas</span>
                  </div>
                  <div className="bg-white/15 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                    <span className="block text-base font-black">{activeSearch.suggestionsCount}</span>
                    <span className="text-[10px] text-blue-200 uppercase">Sugerencias</span>
                  </div>
                  <div className="bg-emerald-500/90 text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow">
                    {activeSearch.matchScore}% Compatibilidad
                  </div>
                </div>
              </div>
            </div>

            {/* List of Matched Properties (Mirroring Screenshot Image 2) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                <span>Propiedades Encontradas y Enviadas</span>
                <span>Estado Comercial del Cliente</span>
              </div>

              {activeSearch.matchedProperties.map(prop => (
                <div 
                  key={prop.id}
                  className="bg-slate-50 hover:bg-blue-50/40 rounded-2xl p-4 border border-slate-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <img 
                      src={prop.imageUrl} 
                      alt={prop.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-200 shadow-xs flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {prop.source}
                        </span>
                        <span className="text-xs font-black text-slate-900">
                          USD {prop.priceUSD.toLocaleString()}
                        </span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">
                          {prop.matchScore}% Match
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {prop.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 truncate max-w-md">
                        {prop.sourceUrl}
                      </p>
                      {prop.notes && (
                        <p className="text-[11px] font-semibold text-emerald-700 mt-1 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                          📌 {prop.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                    <select
                      value={propStatuses[prop.id] || prop.status}
                      onChange={(e) => setPropStatuses({ ...propStatuses, [prop.id]: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 shadow-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Sin respuesta">Sin respuesta</option>
                      <option value="Interesado">Interesado</option>
                      <option value="Visita coordinada">Visita coordinada</option>
                      <option value="No interesado">No interesado</option>
                    </select>

                    <button
                      onClick={() => onOpenWhatsAppPreview(activeSearch.id)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                    >
                      <span>Compartir</span>
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 2. RADAR DE DEMANDA SIMULATOR */}
        {activeSimulator === 'radar' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Map & Heat Area */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                
                {/* Visual Map Grid & Radial Heat Simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f633_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                
                {/* Hotspot Blobs */}
                <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-500/30 blur-3xl rounded-full pointer-events-none animate-pulse-glow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/25 blur-2xl rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Radar className="w-5 h-5 text-rose-400 animate-spin" />
                    <span className="font-bold text-sm tracking-wide">Radar de Demanda · Santa Fe & Alrededores</span>
                  </div>
                  <span className="text-xs bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-full border border-rose-400/30">
                    167 Compradores Activos
                  </span>
                </div>

                {/* Interactive Map Nodes */}
                <div className="relative z-10 my-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DEMAND_ZONES.map((zone) => {
                    const isSelected = selectedZone.id === zone.id;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone)}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? 'bg-blue-600/90 border-blue-400 shadow-lg shadow-blue-600/40 ring-2 ring-blue-400'
                            : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold truncate">{zone.name}</span>
                          {zone.heatLevel === 'high' && (
                            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-300 font-semibold">
                          {zone.activeBuyers} compradores
                        </p>
                        <p className="text-[10px] text-emerald-400">
                          {zone.growth}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                  <span>🟢 Demanda Calificada</span>
                  <span>🟠 En Alza</span>
                  <span>🔴 Máxima Presión de Compra</span>
                </div>

              </div>

              {/* Zone Details Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Análisis de Mercado
                    </span>
                    <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Flame className="w-3 h-3 text-rose-600" />
                      Zona de Alta Demanda
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {selectedZone.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 mt-1">
                      {selectedZone.growth}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Compradores Activos</span>
                      <span className="text-2xl font-black text-slate-900">{selectedZone.activeBuyers}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Presupuesto Promedio</span>
                      <span className="text-xl font-black text-emerald-600">USD {selectedZone.avgBudgetUSD.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Qué captar en esta zona hoy:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      👉 <strong className="text-slate-800">{selectedZone.topDemandType}</strong>. Los compradores en esta zona tienen seña disponible y buscan operaciones inmediatas.
                    </p>
                  </div>

                </div>

                <button
                  onClick={onOpenTrial}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Radar className="w-4 h-4" />
                  <span>Ver todas las zonas en el CRM</span>
                </button>

              </div>

            </div>
          </div>
        )}

        {/* 3. RONDA & CHAT SIMULATOR */}
        {activeSimulator === 'ronda' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Network Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Handshake className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold">Ronda de Negocios Inmobiliaria</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Conectate de forma directa y segura con otras inmobiliarias de la red. Compartí operaciones, dividí comisiones al 50/50 y cerrá ventas conjuntas.
                  </p>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Inmobiliarias en red:</span>
                      <span className="font-bold text-white">120+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Propiedades compartidas:</span>
                      <span className="font-bold text-emerald-400">500+ activas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Protección de datos:</span>
                      <span className="font-bold text-blue-300">100% Blindado</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
                  <span className="font-bold block">💡 ¿Cómo funciona el chat B2B?</span>
                  <p>
                    Cuando encontrás una propiedad en la Ronda de Negocios para tu comprador, abrís un chat directo con la inmobiliaria captadora con un clic para coordinar la visita.
                  </p>
                </div>
              </div>

              {/* Right Column: Chat Box Simulator */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-[420px]">
                
                {/* Chat Header */}
                <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                      alt="Agustín Duarte"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Agustín Duarte</h4>
                      <p className="text-[11px] text-slate-500">Duarte Propiedades · Colega en Red</p>
                    </div>
                  </div>
                  <span className="text-[11px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">
                    En línea
                  </span>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messages.map(msg => (
                    <div 
                      key={msg.id}
                      className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.isMe 
                          ? 'bg-blue-600 text-white rounded-br-xs' 
                          : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-xs'
                      }`}>
                        {!msg.isMe && (
                          <span className="text-[10px] font-bold text-blue-600 block mb-0.5">
                            {msg.sender} ({msg.agency})
                          </span>
                        )}
                        <p>{msg.text}</p>
                        
                        {/* Property Snippet */}
                        {msg.propertySnippet && (
                          <div className="mt-2 p-2 bg-slate-50 text-slate-800 rounded-xl border border-slate-200 space-y-1">
                            <p className="font-bold text-[11px] text-slate-900">{msg.propertySnippet.title}</p>
                            <div className="flex justify-between text-[10px] text-slate-600">
                              <span>{msg.propertySnippet.zone}</span>
                              <span className="font-bold text-emerald-600">{msg.propertySnippet.price}</span>
                            </div>
                            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded block">
                              🤝 {msg.propertySnippet.commissionShare}
                            </span>
                          </div>
                        )}

                        <span className={`text-[9px] block text-right mt-1 ${msg.isMe ? 'text-blue-200' : 'text-slate-400'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2">
                  <input 
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Escribí un mensaje al colega..."
                    className="flex-1 px-4 py-2.5 bg-slate-100 rounded-xl text-xs focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition-colors flex items-center gap-1"
                  >
                    <span>Enviar</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
