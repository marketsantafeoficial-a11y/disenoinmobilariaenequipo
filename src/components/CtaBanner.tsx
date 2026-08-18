import React from 'react';
import { 
  Rocket, 
  UserPlus, 
  Timer, 
  CreditCard, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white p-8 sm:p-14 overflow-hidden shadow-2xl shadow-blue-600/30 text-center">
          
          {/* Decorative Glow Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Llevá tu inmobiliaria <br />
              al próximo nivel
            </h2>
            
            <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
              Unite a los líderes del sector. 30 días gratis con todas las herramientas de matching y red colaborativa. Sin compromisos.
            </p>

            {/* Glassmorphic Specs Box */}
            <div className="bg-white/10 rounded-2xl p-5 mb-8 backdrop-blur-md border border-white/20 divide-y divide-white/15 text-left text-sm">
              <div className="flex items-center justify-between py-3">
                <span className="text-blue-100 flex items-center gap-2">
                  <Timer className="w-4 h-4 text-blue-300" />
                  Tiempo de prueba
                </span>
                <span className="font-bold text-white">30 días full sin límites</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-blue-100 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-300" />
                  Tarjeta de crédito
                </span>
                <span className="font-bold text-white">No requerida</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-blue-100 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-300" />
                  Acceso
                </span>
                <span className="font-bold text-white">Inmediato en 1 minuto</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-white hover:bg-blue-50 text-blue-700 font-extrabold text-base rounded-2xl shadow-xl transition-all hover:scale-[1.02]"
            >
              <UserPlus className="w-5 h-5 text-blue-600" />
              <span>Crear cuenta gratis ahora</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
