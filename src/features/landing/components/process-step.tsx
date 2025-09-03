import React from "react";
import { ProcessStepProps } from "../types";

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  gradientClass = "bg-gradient-primary",
}) => {
  return (
    <div className="text-center animate-slide-up">
      <div
        className={`w-16 h-16 ${gradientClass} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ProcessStep;
