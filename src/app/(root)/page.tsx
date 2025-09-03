import CTASection from "@/features/landing/components/cta-section";
import FeaturesSection from "@/features/landing/components/features-section";
import HeroSection from "@/features/landing/components/hero-section";
import ProcessSection from "@/features/landing/components/process-section";
import StatsSection from "@/features/landing/components/stats-section";
import React from "react";

const MinPage = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default MinPage;
