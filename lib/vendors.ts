import vendorsData from './vendors.json';

export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  specialization: string;
  location: string;
  state: string;
  contact: string;
  phone: string;
  website: string;
  consultationFee: string;
  rating: number;
  reviews: number;
  description_long: string;
  services: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export function getAllVendors(): Vendor[] {
  return vendorsData.vendors;
}

export function getVendorById(id: string): Vendor | undefined {
  return vendorsData.vendors.find(v => v.id === id);
}

export function getVendorsByCategory(categoryId: string): Vendor[] {
  return vendorsData.vendors.filter(v => v.category === categoryId);
}

export function getFeaturedVendors(): Vendor[] {
  return vendorsData.vendors.filter(v => v.featured === true);
}

export function getVendorsByState(state: string): Vendor[] {
  return vendorsData.vendors.filter(v => v.state === state);
}

export function getCategories(): Category[] {
  return vendorsData.categories;
}

export function getCategoryById(id: string): Category | undefined {
  return vendorsData.categories.find(c => c.id === id);
}

export function searchVendors(query: string): Vendor[] {
  const lowerQuery = query.toLowerCase();
  return vendorsData.vendors.filter(v =>
    v.name.toLowerCase().includes(lowerQuery) ||
    v.description.toLowerCase().includes(lowerQuery) ||
    v.specialization.toLowerCase().includes(lowerQuery) ||
    v.location.toLowerCase().includes(lowerQuery) ||
    v.services.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

export function getStates(): string[] {
  const states = new Set(vendorsData.vendors.map(v => v.state));
  return Array.from(states).sort();
}
