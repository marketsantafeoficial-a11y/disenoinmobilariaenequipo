import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Share2, 
  Smartphone, 
  Send,
  Sparkles
} from 'lucide-react';
import { MOCK_CLIENT_SEARCHES } from '../data/mockData';

interface WhatsAppPreviewModalProps {
  searchId: string | null;
  onClose: () => void;
}

export const WhatsAppPreviewModal: React.FC<WhatsAppPreviewModalProps> = ({ searchId, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!searchId) return null;

  const currentSearch = MOCK_CLIENT_SEARCHES.find(s => s.id === searchId) || MOCK_CLIENT_SEARCHES[0];

  const rawMessage = `¡Hola ${currentSearch.clientName}! 👋 ¿Cómo estás? 

En base a lo que estás buscando en ${currentSearch.zone} (${currentSearch.bedrooms} dormitorios, presupuesto hasta USD ${currentSearch.budgetMax.toLocaleString()}), encontré estas excelentes opciones seleccionadas para vos:

${currentSearch.matchedProperties.map((p, idx) => `${idx + 1}. *${p.title}* - USD ${p.priceUSD.toLocaleString()}
📍 ${p.zone} · ${p.bedrooms} dorms · ${p.coveredAreaM2} m²
🔗 ${p.sourceUrl}`).join('\n\n')}

🔍 *Búsqueda ampliada en portales:*
https://www.google.com/search?q=site%3Azonaprop.com.ar+${encodeURIComponent(currentSearch.zone)}+${encodeURIComponent(currentSearch.city)}+casa

¿Cuál de estas te parece más interesante para ir a ver esta semana? ¡Avisame y coordinamos la visita! 👍`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(rawMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-slate-900">
                Propuesta WhatsApp
              </h3>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                1-Clic
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Mensaje automático generado para <strong>{currentSearch.clientName}</strong>
            </p>
          </div>
        </div>

        {/* Realistic WhatsApp Chat Bubble Container (Reflecting Image 4) */}
        <div className="bg-[#E5DDD5] rounded-2xl p-4 border border-slate-300 shadow-inner mb-5 relative">
          
          {/* Subtle WhatsApp wallpaper pattern */}
          <div className="bg-white rounded-2xl p-4 shadow-sm text-xs sm:text-sm text-slate-800 space-y-3 font-sans relative border border-slate-200">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100 text-[11px] text-emerald-700 font-bold">
              <span>InmoCRM · Mensaje Listo para Enviar</span>
              <span className="text-[10px] text-slate-400">Ahora</span>
            </div>

            <p className="whitespace-pre-line leading-relaxed text-slate-700">
              {rawMessage}
            </p>

            <div className="text-right text-[10px] text-slate-400 font-medium pt-1">
              ✓✓ Entregado
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">¡Copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Copiar texto del mensaje</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full sm:flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Abrir en WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
