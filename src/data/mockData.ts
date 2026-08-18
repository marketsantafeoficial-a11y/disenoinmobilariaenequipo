import { ClientSearch, DemandZone, RondaMessage } from '../types';

export const SYSTEM_SCREENSHOTS = [
  {
    id: 'dashboard',
    title: 'Dashboard Analítico',
    description: 'Vista general de métricas clave, KPIs de pipeline, búsquedas activas y comisiones en tiempo real.',
    imgUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvaMP33v5z0Nd5a3qstXQ60ZT2KGFxsyR59ELZnI3MoUIbX7m9JZMOhNDybS6b6vRLjwiZQ2Al6Fa7_jGuOPI2BSJg9JUmTVZbZZacddkc_SK7WuVTlimDts6Y4yMZFSMyeegPkdy-THk28P5RWuNVKHlNrP-YN26NhR0oR2kz0rT3zrwdexZyIUOeH1FWIcEYdv0yezV-OZNj--aFAI1nCXVGaXWc_CChQjAdkYjyVJkmmWqRs9UXeDdU0',
    tags: ['Métricas', 'Pipeline', 'Comisiones']
  },
  {
    id: 'gestion-cliente',
    title: 'Gestión Integral de Cliente',
    description: 'Historial completo de propiedades enviadas, respuestas del comprador y seguimiento con 1 clic a WhatsApp.',
    imgUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLs2bd3OkyQUXlFH2UVyUpckbnpelNqxHsVzZ9vZuxNqwZCOqzvqSO_n_0v0nwk5uL1HII6o7bfePyWpA1Z8bRNWelxwkoI-AQpZ0Nt_AC203HVTlgP7k8k8ssRGqIOfksl6R85us0Xofu4GkkuO5wj59xFI58_TcknsISmJuJEcToh6rHUkBhoO4TzN92dXG9JVhiMilAj2fpjzqHAIq5GjkSjDs4SHLxOVcTZ5Fb6adDUDLVIjgZHKhZwd',
    tags: ['Clientes', 'Historial', 'WhatsApp']
  },
  {
    id: 'busqueda-inteligente',
    title: 'Búsqueda Inteligente en Portales',
    description: 'Filtro cruzado simultáneo que busca en cartera propia, red de colegas y los portales inmobiliarios líderes.',
    imgUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLuZEAlP6LYjbJK3y8IFUpG81Ta4tFbL-T-LSUOPlejr1evdPSEkdG8POW6lrNgBtizxeXax_8mLuILBJFUCP1D7lKvKVniPyEjTjI1lv_3iwoibQtrO84H_gIUh0JHiw95bPJx7Uv9AOPJzP5SvagDYVjaOpW1hM9pqg5al6Mvgz1VOm1GYk9SdB90k3HudRgrAVmB1Ia6WYkrVvDpqzZljgowxnHwQSX8pFaPyUPZwEMIFI5-1pAPkzIPa',
    tags: ['Algoritmo', 'Filtros', 'Multicanal']
  },
  {
    id: 'portales',
    title: 'Integración con Portales y Google',
    description: 'Acceso directo a oportunidades en Zonaprop, ArgenProp, MercadoLibre, Remax, Century21 y directorios locales.',
    imgUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsHvkxhHF3Bm0ni6Lf1mBCZhN6eZUDlEcEf9hhxVHB2oli1UK-X2ZLP6aDEm75HcGqNXLBS9xDPNhGadFPG1sMf4Po7ifuHzony_b9eE3uOA3uXRng4078zgLKJ1gnYxq3yy1QAPrzCL8uUX9ohcGAUG8HEXTeWur0KlXKIfUahtwRMKisoKj7cJySFkJl5RdjHE0aXRj5uEW1vZxYZ1H6igXvrueCSzoWruZuSGuZZF0i8OJ3Rf9Q-h5LK',
    tags: ['Zonaprop', 'Argenprop', 'MercadoLibre']
  }
];

export const MOCK_CLIENT_SEARCHES: ClientSearch[] = [
  {
    id: 'search-1',
    name: 'Busqueda 7 Jefes Familia Numerosa (Mario Barletta)',
    clientName: 'Mario Barletta',
    searchType: 'CASA',
    zone: '7 Jefes',
    city: 'Santa Fe Capital',
    budgetMin: 170000,
    budgetMax: 215000,
    currency: 'USD',
    bedrooms: 4,
    matchScore: 94,
    date: '21/02/2026',
    status: 'active',
    propsSentCount: 6,
    suggestionsCount: 3,
    matchedProperties: [
      {
        id: 'prop-1',
        title: 'Casa moderna 4 dormitorios c/ piscina y quincho',
        source: 'Propia',
        sourceUrl: 'https://inmoteam.com/prop/7jefes-102',
        priceUSD: 195000,
        zone: '7 Jefes',
        city: 'Santa Fe',
        bedrooms: 4,
        bathrooms: 3,
        coveredAreaM2: 240,
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        matchScore: 96,
        status: 'Interesado',
        notes: 'Visita pactada para el sábado 10:30hs'
      },
      {
        id: 'prop-2',
        title: 'MercadoUnico (sitio en Google) - Casa en 7 Jefes',
        source: 'MercadoUnico',
        sourceUrl: 'https://www.google.com/search?q=site:mercado-unico.com+casa+venta+santa+fe+capital+4+dormitorios',
        priceUSD: 210000,
        zone: '7 Jefes',
        city: 'Santa Fe',
        bedrooms: 4,
        bathrooms: 2,
        coveredAreaM2: 210,
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        matchScore: 92,
        status: 'Sin respuesta'
      },
      {
        id: 'prop-3',
        title: 'Remax (sitio en Google) - Casa residencial sobre Bv.',
        source: 'Remax',
        sourceUrl: 'https://www.google.com/search?q=site:remax.com.ar+casa+venta+santa+fe+capital+4+dormitorios',
        priceUSD: 185000,
        zone: '7 Jefes',
        city: 'Santa Fe',
        bedrooms: 4,
        bathrooms: 2,
        coveredAreaM2: 195,
        imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
        matchScore: 89,
        status: 'Sin respuesta'
      },
      {
        id: 'prop-4',
        title: 'Century21 (sitio en Google) - Casa estilo colonial reciclada',
        source: 'Century21',
        sourceUrl: 'https://www.google.com/search?q=site:century21.com.ar+casa+venta+santa+fe+capital',
        priceUSD: 215000,
        zone: '7 Jefes',
        city: 'Santa Fe',
        bedrooms: 4,
        bathrooms: 3,
        coveredAreaM2: 260,
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        matchScore: 88,
        status: 'Sin respuesta'
      },
      {
        id: 'prop-5',
        title: 'Inmobiliarias en Santa Fe Capital - Búsqueda consolidada',
        source: 'Google',
        sourceUrl: 'https://www.google.com/search?q=inmobiliarias+santa+fe+capital+casa+venta',
        priceUSD: 175000,
        zone: '7 Jefes',
        city: 'Santa Fe',
        bedrooms: 4,
        bathrooms: 2,
        coveredAreaM2: 180,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        matchScore: 84,
        status: 'No interesado'
      }
    ]
  },
  {
    id: 'search-2',
    name: 'Busqueda Casa Zona Tribunales (Coty Sobrina)',
    clientName: 'Coty Sobrina',
    searchType: 'CASA',
    zone: 'Tribunales / Centro Sur',
    city: 'Santa Fe Capital',
    budgetMin: 120000,
    budgetMax: 160000,
    currency: 'USD',
    bedrooms: 3,
    matchScore: 91,
    date: '20/02/2026',
    status: 'active',
    propsSentCount: 4,
    suggestionsCount: 2,
    matchedProperties: [
      {
        id: 'prop-201',
        title: 'Casa clásica en calle San Jerónimo',
        source: 'Propia',
        sourceUrl: 'https://inmoteam.com/prop/tribunales-44',
        priceUSD: 145000,
        zone: 'Tribunales',
        city: 'Santa Fe',
        bedrooms: 3,
        bathrooms: 2,
        coveredAreaM2: 170,
        imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
        matchScore: 95,
        status: 'Interesado'
      }
    ]
  },
  {
    id: 'search-3',
    name: 'Busqueda Depto Torre 2 Dorm (Emiliano)',
    clientName: 'Emiliano Rossi',
    searchType: 'DEPARTAMENTO',
    zone: 'Dentro Boulevares / Candioti',
    city: 'Santa Fe Capital',
    budgetMin: 90000,
    budgetMax: 130000,
    currency: 'USD',
    bedrooms: 2,
    matchScore: 88,
    date: '19/02/2026',
    status: 'active',
    propsSentCount: 8,
    suggestionsCount: 5,
    matchedProperties: [
      {
        id: 'prop-301',
        title: 'Semipiso 2D con balcón terraza y cochera',
        source: 'Ronda',
        sourceUrl: 'https://inmoteam.com/prop/candioti-88',
        priceUSD: 118000,
        zone: 'Candioti Sur',
        city: 'Santa Fe',
        bedrooms: 2,
        bathrooms: 2,
        coveredAreaM2: 85,
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        matchScore: 93,
        status: 'Visita coordinada'
      }
    ]
  },
  {
    id: 'search-4',
    name: 'Casa/PH PB 2D dentro Bv + cochera grande (Walter)',
    clientName: 'Walter Gómez',
    searchType: 'PH / CASA',
    zone: 'Dentro Boulevares',
    city: 'Santa Fe Capital',
    budgetMin: 80000,
    budgetMax: 115000,
    currency: 'USD',
    bedrooms: 2,
    matchScore: 86,
    date: '18/02/2026',
    status: 'active',
    propsSentCount: 3,
    suggestionsCount: 1,
    matchedProperties: []
  }
];

export const DEMAND_ZONES: DemandZone[] = [
  {
    id: 'zone-7jefes',
    name: '7 Jefes & Costanera',
    activeBuyers: 34,
    avgBudgetUSD: 195000,
    topDemandType: 'Casas 3-4 dorms con patio/pileta',
    heatLevel: 'high',
    growth: '+28% este mes',
    coords: { x: 68, y: 32 }
  },
  {
    id: 'zone-candioti',
    name: 'Candioti Norte / Sur',
    activeBuyers: 52,
    avgBudgetUSD: 125000,
    topDemandType: 'Deptos 2 dorms con balcón y cochera',
    heatLevel: 'high',
    growth: '+42% este mes',
    coords: { x: 55, y: 50 }
  },
  {
    id: 'zone-centro',
    name: 'Centro / Dentro Boulevares',
    activeBuyers: 41,
    avgBudgetUSD: 98000,
    topDemandType: 'Deptos 1-2 dorms apto profesional',
    heatLevel: 'medium',
    growth: '+15% este mes',
    coords: { x: 42, y: 62 }
  },
  {
    id: 'zone-tribunales',
    name: 'Tribunales & Sur',
    activeBuyers: 22,
    avgBudgetUSD: 140000,
    topDemandType: 'Casas/PH amplios para estudio',
    heatLevel: 'medium',
    growth: '+10% este mes',
    coords: { x: 35, y: 78 }
  },
  {
    id: 'zone-country',
    name: 'El Paso / Santo Tomé',
    activeBuyers: 19,
    avgBudgetUSD: 280000,
    topDemandType: 'Casas en barrios cerrados',
    heatLevel: 'high',
    growth: '+35% este mes',
    coords: { x: 20, y: 40 }
  }
];

export const RONDA_MESSAGES_DEMO: RondaMessage[] = [
  {
    id: 'm1',
    sender: 'Agustín Duarte',
    agency: 'Duarte Propiedades',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    time: '11:42',
    text: 'Hola colega! Vi que tenés un cliente buscando en 7 Jefes hasta 215k. Nosotros acabamos de captar una sobre Vélez Sarsfield en exclusiva.',
    isMe: false,
    propertySnippet: {
      title: 'Casa 4D en 7 Jefes con cochera doble',
      zone: '7 Jefes, Santa Fe',
      price: 'USD 198.000',
      commissionShare: '50% / 50% honorarios compartidos'
    }
  },
  {
    id: 'm2',
    sender: 'Vos (Inmobiliaria en Equipo)',
    agency: 'Mi Inmobiliaria',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    time: '11:45',
    text: 'Excelente Agustín! Justo tengo al comprador Mario Barletta súper calificado con seña lista. ¿Podemos coordinar visita para este jueves?',
    isMe: true
  },
  {
    id: 'm3',
    sender: 'Agustín Duarte',
    agency: 'Duarte Propiedades',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    time: '11:48',
    text: 'Perfecto, confirmado jueves 17:00 hs. Te paso la ficha sin logo para que se la compartas directo a tu cliente.',
    isMe: false
  }
];
