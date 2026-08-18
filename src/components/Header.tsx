import React, { useState } from 'react';
import { 
  Building2, 
  Rocket, 
  Bell, 
  User, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: '¡Nuevo Match 96%!',
      desc: 'Casa en 7 Jefes coincide con Mario Barletta.',
      time: 'Hace 5 min',
      read: false
    },
    {
      id: 2,
      title: 'Mensaje en Ronda de Negocios',
      desc: 'Duarte Propiedades te envió una propuesta.',
      time: 'Hace 25 min',
      read: false
    },
    {
      id: 3,
      title: 'Radar de Demanda actualizado',
      desc: '+14 nuevos compradores buscando en Candioti.',
      time: 'Hace 2 horas',
      read: true
    }
  ];

  return (
    <header className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-blue-600 text-lg tracking-tight">IE</span>
                <span className="font-bold text-slate-900 text-lg tracking-tight">Inmobiliaria en Equipo</span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 hidden sm:block">
                InmoCRM · Red Colaborativa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#funcionalidades" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#matching" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              Matching
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-200">
                94%
              </span>
            </a>
            <a href="#ronda" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Ronda de Negocios
            </a>
            <a href="#radar" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Radar de Demanda
            </a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Cómo funciona
            </a>
            <a href="#precios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Precios
            </a>
            <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Notification Bell Dropdown Button */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Ver notificaciones"
                className="relative p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-semibold text-slate-900 text-sm">Notificaciones en Vivo</span>
                    <span className="text-xs bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full">
                      3 nuevas
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-3 hover:bg-slate-50 rounded-lg px-2 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-slate-900">{n.title}</p>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.time}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      setShowNotifications(false);
                      onOpenTrial();
                    }}
                    className="w-full mt-2 py-2 text-xs font-semibold text-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Ver todas en el CRM →
                  </button>
                </div>
              )}
            </div>

            {/* Agendar Demo link */}
            <button
              onClick={onOpenDemo}
              className="hidden md:inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Agendar demo
            </button>

            {/* Primary CTA button */}
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
            >
              <Rocket className="w-4 h-4" />
              <span>Probar gratis 30 días</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 px-2 space-y-2 bg-white/95 backdrop-blur-md">
            <a 
              href="#funcionalidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Funcionalidades
            </a>
            <a 
              href="#matching" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Matching Inteligente
            </a>
            <a 
              href="#ronda" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Ronda de Negocios
            </a>
            <a 
              href="#radar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Radar de Demanda
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Cómo funciona
            </a>
            <a 
              href="#precios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Precios
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Contacto
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md"
              >
                <Rocket className="w-4 h-4" />
                Probar gratis 30 días
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full flex items-center justify-center py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-xl"
              >
                Solicitar reunión / Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
