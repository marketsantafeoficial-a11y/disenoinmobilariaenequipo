import React from 'react';
import { 
  Check, 
  Sparkles, 
  Rocket, 
  CreditCard, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="precios" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Precios Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Empezá gratis, <br className="hidden sm:inline" />
            <span className="text-blue-600">pagá solo si te sirve</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            30 días de prueba gratis con acceso total. Sin tarjeta de crédito. Después, una mensualidad simple.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Free Trial */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Sin Compromiso
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-1">
                Prueba gratis
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Para que compruebes la velocidad del CRM en tus operaciones diarias.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-slate-100">
                <span className="text-5xl font-black text-slate-900 tracking-tight">$0</span>
                <span className="text-sm font-semibold text-slate-500">/ 30 días completos</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Todas las funcionalidades core habilitadas</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Gestión ilimitada de clientes y requerimientos</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Búsqueda en internet en 6 portales y mapa</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Formularios rápidos y exportación WhatsApp</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenTrial}
              className="w-full py-4 bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 font-bold text-base rounded-2xl transition-all shadow-xs"
            >
              Empezar prueba gratis
            </button>
          </div>

          {/* Card 2: Pro Plan (Featured) */}
          <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 border-2 border-blue-400 shadow-2xl shadow-blue-600/30 flex flex-col justify-between relative transform lg:-translate-y-2">
            
            {/* Top Popular Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-slate-900 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              LA ELECCIÓN DE LOS LÍDERES
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs">
                  Suscripción Mensual
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-1">
                Plan Pro
              </h3>
              <p className="text-sm text-blue-100 mb-6">
                Potencia absoluta para agencias que quieren dominar su mercado.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/20">
                <span className="text-5xl font-black text-white tracking-tight">$20.000</span>
                <span className="text-sm font-semibold text-blue-200">/ mes final</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Todo lo incluido en la prueba gratis</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Matching inteligente con afinidad en tiempo real</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Matching Inverso para captaciones nuevas</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Ronda de Negocios y chat directo entre inmobiliarias</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Radar de Demanda con análisis geográfico y tendencias</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Soporte VIP prioritario por WhatsApp directo</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenTrial}
              className="w-full py-4 bg-white hover:bg-slate-100 text-blue-700 font-extrabold text-base rounded-2xl shadow-lg transition-all hover:scale-[1.01]"
            >
              Comenzar con Plan Pro (30 días gratis)
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
