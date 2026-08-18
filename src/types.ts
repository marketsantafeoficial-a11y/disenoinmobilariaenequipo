export interface ClientSearch {
  id: string;
  name: string;
  clientName: string;
  searchType: string;
  zone: string;
  city: string;
  budgetMin: number;
  budgetMax: number;
  currency: string;
  bedrooms: number;
  matchScore: number;
  date: string;
  status: 'active' | 'sent' | 'pending' | 'closed';
  propsSentCount: number;
  suggestionsCount: number;
  matchedProperties: MatchedProperty[];
}

export interface MatchedProperty {
  id: string;
  title: string;
  source: 'Propia' | 'Ronda' | 'Zonaprop' | 'ArgenProp' | 'MercadoLibre' | 'Remax' | 'Century21' | 'MercadoUnico' | 'Google';
  sourceUrl: string;
  priceUSD: number;
  zone: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  coveredAreaM2: number;
  imageUrl: string;
  matchScore: number;
  status: 'Sin respuesta' | 'Interesado' | 'No interesado' | 'Visita coordinada';
  notes?: string;
}

export interface DemandZone {
  id: string;
  name: string;
  activeBuyers: number;
  avgBudgetUSD: number;
  topDemandType: string;
  heatLevel: 'high' | 'medium' | 'low';
  growth: string;
  coords: { x: number; y: number };
}

export interface RondaMessage {
  id: string;
  sender: string;
  agency: string;
  avatar: string;
  time: string;
  text: string;
  isMe: boolean;
  propertySnippet?: {
    title: string;
    zone: string;
    price: string;
    commissionShare: string;
  };
}
