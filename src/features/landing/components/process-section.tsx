import React from "react";
import ProcessStep from "./process-step";

const ProcessSection = () => {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            كيف يعمل النظام؟
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              number={1}
              title="أرسل ملاحظتك"
              description="املأ النموذج بالمعلومات المطلوبة واحصل على رقم تتبع فوري"
              gradientClass="bg-gradient-primary"
            />
            <ProcessStep
              number={2}
              title="تابع التقدم"
              description="استخدم رقم التتبع لمراقبة حالة ملاحظتك عبر 6 مراحل"
              gradientClass="bg-gradient-success"
            />
            <ProcessStep
              number={3}
              title="احصل على النتيجة"
              description="سيتم إشعارك بالنتيجة النهائية عند اكتمال المعالجة"
              gradientClass="bg-gradient-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
