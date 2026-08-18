import React from 'react';
import { 
  FileSpreadsheet, 
  Clock, 
  UserX, 
  Settings2, 
  Sparkles, 
  ArrowDown, 
  CheckCircle2,
  Share2,
  Building2,
  Workflow
} from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: 'Información dispersa',
      description: 'Tus datos están en diferentes plataformas, planillas de Excel, WhatsApp y hojas de cálculo desordenadas.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    },
    {
      icon: Clock,
      title: 'Oportunidades perdidas',
      description: 'Te llegan consultas de compradores pero tardás días en encontrar propiedades y los clientes se van a otra inmobiliaria.',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      icon: UserX,
      title: 'Falta de seguimiento',
      description: 'Los clientes potenciales se enfrían por falta de propuestas inmediatas con fotos y respuestas a tiempo.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    {
      icon: Settings2,
      title: 'Procesos manuales',
      description: 'Pasás más tiempo buscando en portales uno por uno y cargando datos que negociando y cerrando ventas.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>El Desafío Diario</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿Te pasa esto en tu inmobiliaria?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            La mayoría de las operaciones se pierden no por falta de clientes, sino por la lentitud de los procesos desconectados.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Connecting Tree Diagram */}
        <div className="relative mt-12 flex flex-col items-center">
          
          {/* Connector Graphic Lines */}
          <div className="w-full max-w-2xl h-8 relative hidden md:block">
            <div className="absolute top-0 left-1/4 right-1/4 h-4 border-t-2 border-l-2 border-r-2 border-blue-400 rounded-t-xl"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-blue-500"></div>
          </div>

          <div className="md:hidden flex flex-col items-center py-2">
            <ArrowDown className="w-6 h-6 text-blue-600 animate-bounce" />
          </div>

          {/* Solution Target Node */}
          <div className="mt-2 inline-flex items-center gap-3.5 px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl shadow-blue-600/25 border border-blue-400">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-200 block">
                La Solución Integral
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Inmobiliaria en Equipo lo conecta todo
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
