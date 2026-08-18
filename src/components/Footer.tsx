import React from 'react';
import { 
  Building2, 
  Rocket, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial }) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-blue-400 text-lg tracking-tight">IE</span>
                <span className="font-bold text-white text-lg tracking-tight ml-1">Inmobiliaria en Equipo</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  InmoCRM · Red Colaborativa
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              El CRM inteligente para inmobiliarias modernas. Matching automático de propiedades, búsqueda global en portales, radar de demanda y red de colaboración B2B.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Datos 100% aislados y seguros
              </span>
            </div>
          </div>

          {/* Col 3: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Soluciones Core
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#matching" className="hover:text-blue-400 transition-colors">Matching Inteligente</a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-blue-400 transition-colors">Matching Inverso</a>
              </li>
              <li>
                <a href="#ronda" className="hover:text-blue-400 transition-colors">Ronda de Negocios</a>
              </li>
              <li>
                <a href="#radar" className="hover:text-blue-400 transition-colors">Radar de Demanda</a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-blue-400 transition-colors">Búsqueda en Internet</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Portales Integrados */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Portales Conectados
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Zonaprop</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Argenprop</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>MercadoLibre Inmuebles</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Remax / Century 21</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Búsqueda Google Site</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contacto y Soporte
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+54 9 342 456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>contacto@inmobiliariaenequipo.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Santa Fe, Argentina</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>30 Días Gratis</span>
              </button>
            </div>
          </div>

        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Inmobiliaria en Equipo (InmoCRM). Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Hecho con dedicación para profesionales inmobiliarios</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
