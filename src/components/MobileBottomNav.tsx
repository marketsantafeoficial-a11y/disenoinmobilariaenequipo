import React from 'react';
import { 
  Home, 
  Search, 
  Radar, 
  Handshake, 
  Rocket, 
  MessageSquare 
} from 'lucide-react';

interface MobileBottomNavProps {
  onOpenTrial: () => void;
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  onOpenTrial,
  activeSection 
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-safe shadow-lg">
      <div className="grid grid-cols-5 items-center px-2 py-1.5 text-center">
        
        {/* Home */}
        <a 
          href="#" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Inicio</span>
        </a>

        {/* Matching */}
        <a 
          href="#matching" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Matching</span>
        </a>

        {/* Radar */}
        <a 
          href="#radar" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Radar className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Radar</span>
        </a>

        {/* Ronda */}
        <a 
          href="#ronda" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Handshake className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Ronda</span>
        </a>

        {/* Probar Gratis CTA */}
        <button 
          onClick={onOpenTrial}
          className="flex flex-col items-center justify-center py-1 text-blue-600 font-bold"
        >
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Rocket className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-blue-600 mt-0.5 font-bold">Probar</span>
        </button>

      </div>
    </div>
  );
};
