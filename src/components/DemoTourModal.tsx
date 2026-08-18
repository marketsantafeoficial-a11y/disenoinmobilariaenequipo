import React, { useState } from 'react';
import { 
  X, 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Rocket, 
  Zap, 
  Handshake, 
  Radar, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

interface DemoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const DemoTourModal: React.FC<DemoTourModalProps> = ({ isOpen, onClose, onOpenTrial }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      icon: Zap,
      title: '1. Carga Rápida & Matching Automático',
      description: 'Ingresá los requerimientos de tu cliente en segundos. El CRM cruza automáticamente la búsqueda contra propiedades en cartera, en la red colaborativa y portales de internet.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLs2bd3OkyQUXlFH2UVyUpckbnpelNqxHsVzZ9vZuxNqwZCOqzvqSO_n_0v0nwk5uL1HII6o7bfePyWpA1Z8bRNWelxwkoI-AQpZ0Nt_AC203HVTlgP7k8k8ssRGqIOfksl6R85us0Xofu4GkkuO5wj59xFI58_TcknsISmJuJEcToh6rHUkBhoO4TzN92dXG9JVhiMilAj2fpjzqHAIq5GjkSjDs4SHLxOVcTZ5Fb6adDUDLVIjgZHKhZwd',
      badge: '94% Compatibilidad'
    },
    {
      icon: Handshake,
      title: '2. Ronda de Negocios entre Inmobiliarias',
      description: 'Conectate con colegas de confianza para compartir búsquedas y propiedades con división de honorarios 50/50, manteniendo tus clientes 100% blindados.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvaMP33v5z0Nd5a3qstXQ60ZT2KGFxsyR59ELZnI3MoUIbX7m9JZMOhNDybS6b6vRLjwiZQ2Al6Fa7_jGuOPI2BSJg9JUmTVZbZZacddkc_SK7WuVTlimDts6Y4yMZFSMyeegPkdy-THk28P5RWuNVKHlNrP-YN26NhR0oR2kz0rT3zrwdexZyIUOeH1FWIcEYdv0yezV-OZNj--aFAI1nCXVGaXWc_CChQjAdkYjyVJkmmWqRs9UXeDdU0',
      badge: 'Red B2B'
    },
    {
      icon: Radar,
      title: '3. Radar de Demanda en Vivo',
      description: 'Visualizá qué barrios y tipologías están buscando los compradores activos para orientar tus captaciones comerciales hacia lo que se vende rápido.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuZEAlP6LYjbJK3y8IFUpG81Ta4tFbL-T-LSUOPlejr1evdPSEkdG8POW6lrNgBtizxeXax_8mLuILBJFUCP1D7lKvKVniPyEjTjI1lv_3iwoibQtrO84H_gIUh0JHiw95bPJx7Uv9AOPJzP5SvagDYVjaOpW1hM9pqg5al6Mvgz1VOm1GYk9SdB90k3HudRgrAVmB1Ia6WYkrVvDpqzZljgowxnHwQSX8pFaPyUPZwEMIFI5-1pAPkzIPa',
      badge: 'Heatmap de Mercado'
    },
    {
      icon: MessageSquare,
      title: '4. Envío Inmediato por WhatsApp',
      description: 'Generá fichas limpias con un solo clic y envialas directamente al comprador por WhatsApp con links optimizados y seguimiento comercial.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLsHvkxhHF3Bm0ni6Lf1mBCZhN6eZUDlEcEf9hhxVHB2oli1UK-X2ZLP6aDEm75HcGqNXLBS9xDPNhGadFPG1sMf4Po7ifuHzony_b9eE3uOA3uXRng4078zgLKJ1gnYxq3yy1QAPrzCL8uUX9ohcGAUG8HEXTeWur0KlXKIfUahtwRMKisoKj7cJySFkJl5RdjHE0aXRj5uEW1vZxYZ1H6igXvrueCSzoWruZuSGuZZF0i8OJ3Rf9Q-h5LK',
      badge: '1-Clic'
    }
  ];

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
            <Play className="w-5 h-5 fill-white" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">
              Tour Demostrativo Interactivo
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Cómo funciona Inmobiliaria en Equipo
            </h3>
          </div>
        </div>

        {/* Slide Content Box */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 p-4 sm:p-5 mb-6 text-white">
          <div className="relative rounded-xl overflow-hidden mb-4 h-48 sm:h-64 bg-slate-950 flex items-center justify-center">
            <img 
              src={current.image} 
              alt={current.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow">
              {current.badge}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-bold text-white">{current.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Slide Controls & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-blue-600 w-6' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {currentSlide > 0 && (
              <button
                onClick={() => setCurrentSlide(prev => prev - 1)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
            )}

            {currentSlide < slides.length - 1 ? (
              <button
                onClick={() => setCurrentSlide(prev => prev + 1)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenTrial();
                }}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5"
              >
                <Rocket className="w-4 h-4" />
                <span>Empezar 30 días gratis</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
