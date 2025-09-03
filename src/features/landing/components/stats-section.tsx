import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-primary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">1,234+</div>
            <p className="text-muted-foreground">ملاحظة مُعالجة</p>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-primary/75 mb-2">98%</div>
            <p className="text-muted-foreground">معدل الرضا</p>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">متاح على مدار الساعة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
