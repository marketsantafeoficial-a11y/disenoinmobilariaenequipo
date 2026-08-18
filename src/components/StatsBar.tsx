import React from 'react';
import { 
  Building2, 
  Users, 
  Handshake, 
  Globe2, 
  CheckCircle2, 
  Shield, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      number: '500+',
      label: 'Propiedades gestionadas',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Users,
      number: '120+',
      label: 'Inmobiliarias activas',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: Handshake,
      number: '40+',
      label: 'Operaciones cerradas / mes',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Globe2,
      number: '6',
      label: 'Portales conectados',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <section className="relative -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200">
        
        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center p-3 sm:p-4 ${idx > 0 ? 'pt-4 sm:pt-4' : ''}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3 shadow-inner`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 mt-6 border-t border-slate-100">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Multi inmobiliaria & Multi sucursal</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 transition-colors">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Datos 100% aislados por empresa</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 transition-colors">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>Actualizaciones y mejoras continuas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
