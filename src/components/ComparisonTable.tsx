import React from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Rocket, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

interface ComparisonTableProps {
  onOpenTrial: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenTrial }) => {
  const comparisonItems = [
    {
      feature: 'Gestión básica de propiedades e inventario',
      traditional: true,
      ieCRM: true,
      highlight: false
    },
    {
      feature: 'Agenda de contactos, clientes y recordatorios',
      traditional: true,
      ieCRM: true,
      highlight: false
    },
    {
      feature: 'Matching inteligente cliente ↔ propiedad con % de afinidad',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Ronda de Negocios y red colaborativa entre inmobiliarias',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Radar de demanda en tiempo real por barrios y presupuestos',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Búsqueda externa simultánea en Zonaprop, ArgenProp, MercadoLibre y Google',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Generador de fichas limpias y mensajes automáticos para WhatsApp',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Matching Inverso: encontrar compradores listos al captar una propiedad',
      traditional: false,
      ieCRM: true,
      highlight: true
    },
    {
      feature: 'Multi-sucursal con datos 100% aislados y seguros por empresa',
      traditional: false,
      ieCRM: true,
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Tabla Comparativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            ¿Por qué Inmobiliaria en Equipo <br className="hidden sm:inline" />
            <span className="text-blue-600">marca la diferencia?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Un CRM tradicional es un mero archivo de datos. InmoCRM es un motor activo de generación de ventas.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-4 sm:p-6 text-sm font-bold text-slate-900 w-1/2 sm:w-7/12">
                    Capacidades y Herramientas
                  </th>
                  <th className="p-4 sm:p-6 text-center text-xs sm:text-sm font-bold text-slate-500 w-1/4 sm:w-2.5/12">
                    CRM Tradicional
                  </th>
                  <th className="p-4 sm:p-6 text-center text-xs sm:text-sm font-black text-blue-700 bg-blue-50/80 w-1/4 sm:w-2.5/12 border-l border-r border-blue-100">
                    <div className="flex flex-col items-center gap-1">
                      <span>Inmobiliaria en Equipo</span>
                      <span className="text-[10px] uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                        Recomendado
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr 
                    key={idx}
                    className={`hover:bg-slate-50/80 transition-colors ${item.highlight ? 'bg-blue-50/20' : ''}`}
                  >
                    <td className="p-4 sm:p-5 text-xs sm:text-sm font-medium text-slate-800">
                      <div className="flex items-center gap-2">
                        {item.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                        )}
                        <span>{item.feature}</span>
                      </div>
                    </td>

                    {/* Traditional */}
                    <td className="p-4 sm:p-5 text-center">
                      {item.traditional ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-600">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-500">
                          <X className="w-4 h-4" />
                        </div>
                      )}
                    </td>

                    {/* InmoCRM */}
                    <td className="p-4 sm:p-5 text-center bg-blue-50/50 border-l border-r border-blue-100">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white shadow-xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Table Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
              🔒 30 días de prueba sin compromiso. Todos los módulos habilitados desde el minuto uno.
            </span>
            <button
              onClick={onOpenTrial}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
            >
              Comenzar prueba gratis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
