import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCardProps } from "../types";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradientClass = "bg-gradient-primary",
}) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-fade-in">
      <CardHeader>
        <div
          className={`w-12 h-12 ${gradientClass} rounded-lg flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
