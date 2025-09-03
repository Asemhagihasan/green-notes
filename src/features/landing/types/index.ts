export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientClass?: string;
}

export interface ProcessStepProps {
  number: number | string;
  title: string;
  description: string;
  gradientClass?: string;
}
