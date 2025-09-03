import React from "react";
import FeatureCard from "./feature-card";
import { FileText, Search, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "إرسال سهل",
      description: "نموذج بسيط وواضح لإرسال ملاحظاتك مع التحقق من صحة البيانات",
      gradientClass: "bg-gradient-primary",
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "تتبع فوري",
      description: "تتبع الملاحظات بطريقة سهلة وفورية من خلال لوحة التحكم",
      gradientClass: "bg-gradient-success",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "إدارة احترافية",
      description: "نظام إدارة متقدم لمعالجة الملاحظات بطريقة منظمة وفعالة",
      gradientClass: "bg-gradient-primary",
    },
  ];

  return (
    <section className="py-16 px-4 bg-primary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            لماذا تختار نظامنا؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
