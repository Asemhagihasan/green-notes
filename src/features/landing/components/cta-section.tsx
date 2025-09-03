import Link from "next/link";
import React from "react";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ابدأ الآن مع نظام الملاحظات الشخصية
          </h2>
          <Button className="btn-hero text-lg px-8 py-6" asChild>
            <Link href="/submit-note">
              <FileText className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
              إرسال أول ملاحظة
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
