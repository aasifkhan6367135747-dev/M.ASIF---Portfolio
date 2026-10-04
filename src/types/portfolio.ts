export type Industry =
  | 'All'
  | 'Healthcare'
  | 'Dental'
  | 'Real Estate'
  | 'Restaurant'
  | 'Fitness'
  | 'E-commerce'
  | 'Fashion'
  | 'Hotel'
  | 'Corporate'
  | 'Education'
  | 'Automotive'
  | string;

export interface ServiceDetail {
  number: string;
  categoryLabel: string;
  title: string;
  shortDescription: string;
  valueProp: string;
  whatItIncludes: string[];
  features: string[];
  deliverables: string[];
  whatClientReceives: string[];
  clientResponsibilities: string[];
  workflow: string[];
  technologies: string[];
  idealFor: string;
}

export type ProjectCategory =
  | 'All'
  | 'Business Websites'
  | 'E-commerce & WooCommerce'
  | 'Landing Pages'
  | 'Website Redesign'
  | 'Healthcare & Medical'
  | 'Dental'
  | 'Real Estate & Architecture'
  | 'Restaurant & Cafe'
  | 'Fitness & Gym'
  | 'Fashion & Luxury'
  | 'Salon & Spa'
  | 'Law Firm'
  | 'Construction & Trade'
  | 'SaaS & Startups'
  | 'Creative Agency'
  | 'Education & Coaching'
  | 'Automotive & Detailing'
  | 'Hotel Websites'
  | 'Professional Services'
  | string;

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  shortDescription: string;
  services: string[];
  objective: string;
  whatWasBuilt: string;
  features: string[];
  technologies: string[];
  responsiveApproach: string;
  performanceConsiderations: string;
  seoConsiderations: string;
  conversionStrategy: string;
  deliverables: string[];
  accentColor: string;
  demoUrl?: string;
  featured: boolean;
}

export interface WorkflowStage {
  step: number;
  number: string;
  title: string;
  shortDescription: string;
  clientProvides: string[];
  deliverables: string[];
  icon: 'requirements' | 'planning' | 'design' | 'development' | 'delivery';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type WebsiteType =
  | 'Business Website'
  | 'E-commerce & WooCommerce'
  | 'Landing Page'
  | 'Website Redesign'
  | 'Performance Optimization'
  | 'Custom Website / Other'
  | string;

export type PackageTier = 'Basic' | 'Essential' | 'Standard' | 'Premium';

export interface InquiryFormData {
  discussFirst: boolean;
  name: string;
  email: string;
  businessType: string;
  customBusinessType?: string;
  targetIndustry: string;
  customIndustry?: string;
  clientLocation?: string;
  projectRequirements: string;
  packageTier?: PackageTier;
  country?: string;
  stateProvince?: string;
  districtCity?: string;
}
