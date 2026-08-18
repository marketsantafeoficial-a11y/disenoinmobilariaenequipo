import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Users, 
  Handshake, 
  MessageSquare, 
  Search, 
  Radar, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Share2,
  Building,
  Layers,
  Flame,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { MOCK_CLIENT_SEARCHES, DEMAND_ZONES } from '../data/mockData';

interface KeyFeaturesSectionProps {
  onOpenTrial: () => void;
  onOpenWhatsAppPreview: (searchId: string) => void;
}

export const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({ 
  onOpenTrial,
  onOpenWhatsAppPreview
}) => {
  const [activeTab, setActiveTab] = useState<'matching' | 'inverso' | 'ronda' | 'chat' | 'internet' | 'radar'>('matching');
  const [activeZone, setActiveZone] = useState(DEMAND_ZONES[0]);

  return (
    <section id="funcionalidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Features & Módulos Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Todo lo que tu equipo necesita <br className="hidden sm:inline" />
            <span className="text-blue-600">para multiplicar sus cierres</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Herramientas diseñadas exclusivamente para inmobiliarias que buscan automatizar lo operativo y concentrarse en la venta.
          </p>
        </div>

        {/* Feature Grid & Cards (Faithful to Desktop Mockup Image 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Matching Inteligente */}
          <div id="matching" className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  94% Afinidad
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Matching Inteligente
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                El algoritmo compara cada búsqueda de cliente contra propiedades propias, de colegas y portales, calculando compatibilidad al instante.
              </p>

              {/* Mini Interactive Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                  alt="Propiedad Matching"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 bg-white">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900">Casa 4D en 7 Jefes</span>
                    <span className="font-bold text-emerald-600">USD 195.000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Cliente: Mario Barletta</span>
                    <span className="text-[11px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">
                      Match 94%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 border-t border-slate-200/80 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Cliente ➔ Propiedades compatibles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Filtro por zona, precio y tipología</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Matching Inverso (Automated Client Discovery) */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">
                  Captación ➔ Clientes
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Matching Inverso
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                ¿Captaste una propiedad nueva? El sistema te muestra de inmediato qué compradores en tu base ya la están buscando.
              </p>

              {/* Mini List Preview */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm space-y-2 mb-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Compradores compatibles listos:
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                      MB
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Mario Barletta</p>
                      <p className="text-[10px] text-slate-500">Hasta USD 215k</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">
                    94% Match
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                      CS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Coty Sobrina</p>
                      <p className="text-[10px] text-slate-500">Hasta USD 160k</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">
                    91% Match
                  </span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 border-t border-slate-200/80 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Notificación automática de compradores</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Cero días de vacancia al captar</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Ronda de Negocios (Colaboración Exclusiva) */}
          <div id="ronda" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full">
                  Red B2B Inmobiliaria
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                Ronda de Negocios
              </h3>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                Colaboración exclusiva entre colegas para compartir búsquedas y propiedades compartiendo comisiones de forma transparente.
              </p>

              {/* Node Diagram Mockup */}
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 mb-4 flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-1 shadow-md">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200">Inmobiliaria A</span>
                  <span className="text-[9px] text-blue-300">Tiene Comprador</span>
                </div>

                <div className="flex flex-col items-center px-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 animate-pulse">
                    ⇄
                  </div>
                  <span className="text-[9px] text-emerald-400 font-bold mt-1">50/50 Honorarios</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white mb-1 shadow-md">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200">Inmobiliaria B</span>
                  <span className="text-[9px] text-indigo-300">Tiene Propiedad</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs font-medium text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Datos protegidos y seguros</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Amplía tu inventario al instante</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Chat entre Inmobiliarias & WhatsApp */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                  1-Clic WhatsApp
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Chat entre Inmobiliarias
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Mensajería integrada para coordinar visitas con colegas y generar fichas limpias listas para enviar por WhatsApp al comprador.
              </p>

              {/* Chat Bubble Mockup */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 mb-4 space-y-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                  <p className="font-bold text-slate-900 text-[11px]">Agustín (Duarte Prop.)</p>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    "Hola! Te paso la casa en 7 Jefes sin logo para tu cliente."
                  </p>
                </div>
                <div className="bg-emerald-600 text-white p-2.5 rounded-xl ml-4 shadow-xs">
                  <p className="text-[11px]">
                    "Perfecto, visita coordinada para este jueves 17hs 👍"
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenWhatsAppPreview('search-1')}
              className="w-full py-2.5 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Ver ejemplo de mensaje WhatsApp</span>
            </button>
          </div>

          {/* Card 5: Buscar fuera de tu cartera */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                  6 Portales + Google
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Buscar fuera de tu cartera
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Rastrea publicaciones reales en Zonaprop, ArgenProp, MercadoLibre, Remax, Century21 y directorios con links directos.
              </p>

              {/* 3 Tab Source Mockup */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm mb-4">
                <div className="grid grid-cols-3 gap-1.5 text-center mb-3">
                  <div className="p-1.5 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-600">
                    📁 Mi Cartera
                  </div>
                  <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-bold">
                    🌐 Ronda
                  </div>
                  <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg text-[10px] font-bold">
                    🔍 Internet
                  </div>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                    <span>Zonaprop Santa Fe</span>
                    <span className="text-blue-600 font-bold">Filtrado ↗</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                    <span>ArgenProp Búsqueda activa</span>
                    <span className="text-blue-600 font-bold">Filtrado ↗</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 pt-2 border-t border-slate-200/80 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Abre portales con filtros ya aplicados</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Nunca más le decís "no tengo nada" al cliente</span>
              </li>
            </ul>
          </div>

          {/* Card 6: Dashboard & Radar de Demanda */}
          <div id="radar" className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-7 border border-blue-900 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/30">
                  <Radar className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3 h-3 text-rose-400" />
                  Heatmap en vivo
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                Radar de Demanda
              </h3>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                Descubrí qué tipologías y zonas busca el mercado hoy para saber exactamente qué propiedades captar para vender más rápido.
              </p>

              {/* Heatmap Visual Mockup */}
              <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700 mb-4">
                <div className="flex items-center justify-between text-xs pb-2 mb-2 border-b border-slate-700">
                  <span className="font-bold text-slate-200">Zona: 7 Jefes & Costanera</span>
                  <span className="text-emerald-400 font-bold">+28% demanda</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>34 compradores activos</span>
                  <span>Promedio: USD 195k</span>
                </div>
                {/* Visual heat gauge */}
                <div className="w-full h-2 bg-slate-700 rounded-full mt-2 overflow-hidden flex">
                  <div className="w-3/4 h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTrial}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Explorar Radar Completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
