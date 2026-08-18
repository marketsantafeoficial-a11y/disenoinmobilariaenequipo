import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  X,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { SYSTEM_SCREENSHOTS } from '../data/mockData';

interface InteractiveExplorerProps {
  onOpenTrial: () => void;
}

export const InteractiveExplorer: React.FC<InteractiveExplorerProps> = ({ onOpenTrial }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const currentItem = SYSTEM_SCREENSHOTS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SYSTEM_SCREENSHOTS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SYSTEM_SCREENSHOTS.length) % SYSTEM_SCREENSHOTS.length);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Laptop className="w-3.5 h-3.5 text-blue-600" />
            <span>Una Interfaz que Enamora</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Recorré el sistema por dentro
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Una plataforma limpia, potente y pensada al 100% para el mercado inmobiliario moderno.
          </p>

          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {SYSTEM_SCREENSHOTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeIdx === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Big Interactive Showcase Card */}
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Header of the mock frame */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-blue-400">
                  Módulo Activo:
                </span>
                <span className="text-base font-bold text-white">
                  {currentItem.title}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                {currentItem.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setModalImage(currentItem.imgUrl)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar</span>
              </button>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  aria-label="Anterior"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Siguiente"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Screenshot Display Box */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 group">
            <img 
              src={currentItem.imgUrl} 
              alt={currentItem.title}
              className="w-full h-auto max-h-[560px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Hover overlay hint */}
            <div 
              onClick={() => setModalImage(currentItem.imgUrl)}
              className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
            >
              <span className="px-4 py-2 bg-slate-900/90 text-white text-xs font-bold rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 backdrop-blur-md">
                <Eye className="w-4 h-4 text-blue-400" />
                Click para ampliar en alta resolución
              </span>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {currentItem.tags.map((tag, idx) => (
                <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ {tag}
                </span>
              ))}
            </div>

            <button
              onClick={onOpenTrial}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
            >
              <span>Probar este módulo gratis 30 días</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl p-4 border border-slate-800 shadow-2xl">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={modalImage} 
              alt="Vista completa del sistema"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
