import React from 'react';
import { 
  UploadCloud, 
  Zap, 
  Send, 
  Handshake, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket
} from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenTrial: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenTrial }) => {
  const steps = [
    {
      step: '01',
      icon: UploadCloud,
      title: 'Cargá tus búsquedas',
      desc: 'Ingresá el cliente, zona, presupuesto y preferencias en un formulario unificado con autocompletado.',
      color: 'bg-blue-600 text-white',
      accent: 'border-blue-500/20'
    },
    {
      step: '02',
      icon: Zap,
      title: 'Encontrá oportunidades',
      desc: 'El sistema detecta automáticamente los mejores matches en tu cartera, en la Ronda de Negocios y en internet.',
      color: 'bg-indigo-600 text-white',
      accent: 'border-indigo-500/20'
    },
    {
      step: '03',
      icon: Send,
      title: 'Enviá propuestas',
      desc: 'Presentá opciones relevantes a tus clientes con fichas limpias y mensajes directos listos para WhatsApp.',
      color: 'bg-emerald-600 text-white',
      accent: 'border-emerald-500/20'
    },
    {
      step: '04',
      icon: Handshake,
      title: 'Cerrá negocios',
      desc: 'Concretá ventas y alquileres más rápido coordinando visitas con colegas sin perder clientes.',
      color: 'bg-amber-600 text-white',
      accent: 'border-amber-500/20'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            De una consulta dispersa <br className="hidden sm:inline" />
            <span className="text-blue-600">a una operación cerrada</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            InmoCRM simplifica y acelera el flujo de trabajo de cada asesor comercial de tu inmobiliaria.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center font-bold text-lg shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Paso {idx + 1} del ciclo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTrial}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all"
          >
            <Rocket className="w-5 h-5" />
            <span>Probar gratis 30 días</span>
          </button>
        </div>

      </div>
    </section>
  );
};
