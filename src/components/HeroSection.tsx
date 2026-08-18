import React, { useState } from 'react';
import { 
  Rocket, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Building,
  Share2,
  Check,
  Zap,
  MapPin,
  ExternalLink,
  MessageSquare,
  Users
} from 'lucide-react';
import { MOCK_CLIENT_SEARCHES } from '../data/mockData';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  onOpenWhatsAppPreview: (searchId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenTrial, 
  onOpenDemo,
  onOpenWhatsAppPreview
}) => {
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(0);
  const currentSearch = MOCK_CLIENT_SEARCHES[selectedSearchIndex];
  const matchedProp = currentSearch.matchedProperties[0] || {
    id: 'prop-fallback',
    title: 'Casa moderna 4 dormitorios con piscina',
    priceUSD: 195000,
    zone: '7 Jefes, Santa Fe',
    coveredAreaM2: 240,
    bedrooms: 4,
    bathrooms: 3,
    matchScore: 94,
    source: 'Mi Cartera',
    sourceUrl: 'https://inmobiliariaenequipo.com/p/7jefes-4d',
    status: 'Interesado',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#091E3A] via-[#0D254C] to-[#0A1A33] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Inmobiliaria en Equipo · El CRM Inmobiliario más veloz</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] text-white">
              Convertí cada consulta <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                en una oportunidad de negocio
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Una consulta entra y el CRM encuentra las mejores propiedades en segundos: 
              <strong className="text-white font-semibold"> matching automático</strong>, 
              <strong className="text-white font-semibold"> búsqueda en internet</strong> y 
              <strong className="text-white font-semibold"> radar de demanda</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/35 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
              >
                <Rocket className="w-5 h-5 text-blue-200" />
                <span>Probar gratis 30 días</span>
              </button>

              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 backdrop-blur-sm transition-all"
              >
                <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
                <span>Ver cómo funciona</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-300 pt-3">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Configuración instantánea</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Datos aislados y seguros</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive CRM Preview Mockup */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/70 p-4 sm:p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
              
              {/* Window Controls & Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-semibold text-slate-400 ml-2">InmoCRM · Gestión Cliente</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-full text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>En vivo</span>
                </div>
              </div>

              {/* Client Selector Pill Switcher */}
              <div className="mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Seleccioná una búsqueda activa:
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                  {MOCK_CLIENT_SEARCHES.map((search, idx) => (
                    <button
                      key={search.id}
                      onClick={() => setSelectedSearchIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                        selectedSearchIndex === idx 
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {search.clientName} ({search.zone})
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Search Summary Card */}
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60 mb-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-400" />
                      {currentSearch.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {currentSearch.searchType} · {currentSearch.zone}, {currentSearch.city} · Presupuesto: USD {currentSearch.budgetMin.toLocaleString()} - {currentSearch.budgetMax.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                      {currentSearch.propsSentCount} enviadas
                    </span>
                    <span className="text-[11px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-400/30">
                      {currentSearch.suggestionsCount} sugeridas
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Matching Property with 94% Badge */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-850 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3">
                  
                  {/* Property Image & Match Badge */}
                  <div className="sm:col-span-5 relative rounded-lg overflow-hidden h-36 sm:h-full min-h-[120px]">
                    <img 
                      src={matchedProp.imageUrl} 
                      alt={matchedProp.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Fuente: {matchedProp.source}
                    </div>
                    {/* Big 94% Match Float Badge */}
                    <div className="absolute bottom-2 right-2 bg-emerald-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-white" />
                      <span>{currentSearch.matchScore}% MATCH</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="sm:col-span-7 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-black text-emerald-400">
                          USD {matchedProp.priceUSD.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          {matchedProp.zone}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-2 mt-0.5">
                        {matchedProp.title}
                      </h5>
                      <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-2">
                        <span>🛏️ {matchedProp.bedrooms} dorms</span>
                        <span>🚿 {matchedProp.bathrooms} baños</span>
                        <span>📐 {matchedProp.coveredAreaM2} m²</span>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2">
                      <button
                        onClick={() => onOpenWhatsAppPreview(currentSearch.id)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enviar por WhatsApp</span>
                      </button>
                      <button
                        onClick={onOpenTrial}
                        className="py-2 px-3 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1"
                      >
                        <span>Ficha</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Micro-Bar */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> Búsqueda simultánea en 6 portales + red interna
                </span>
                <span className="text-blue-400 font-semibold cursor-pointer hover:underline" onClick={onOpenTrial}>
                  Ver todos los matches →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
