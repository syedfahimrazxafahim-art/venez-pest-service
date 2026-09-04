export type PageTab = 'home' | 'services' | 'pricing' | 'work' | 'about' | 'contact';

export interface PestService {
  id: string;
  name: string;
  spanishName?: string;
  tagline: string;
  description: string;
  startingPrice?: string;
  targetPests: string[];
  treatmentSteps: string[];
  popular?: boolean;
  frequency?: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  cadence: string;
  billingText: string;
  description: string;
  features: string[];
  highlight?: boolean;
  popularBadge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Branding' | 'Treatments' | 'Field Work' | 'Pricing' | 'Promotions';
  fileName: string;
  imageUrl?: string;
  svgFallback?: string;
  caption: string;
  description: string;
  highlights: string[];
  aspectRatio: string;
}

export interface HouseZone {
  id: string;
  name: string;
  pests: string[];
  treatment: string;
  equipment: string;
  frequency: string;
  status: 'Protected' | 'At Risk' | 'Treated';
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  propertyType: 'residential' | 'commercial';
  serviceType: string;
  planSelection: string;
  preferredDate: string;
  preferredTime: string;
  pestNotes: string;
  emergencyDispatch: boolean;
}
