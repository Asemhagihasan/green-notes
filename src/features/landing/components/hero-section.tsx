import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            نظام الملاحظات الشخصية
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            منصة آمنة وموثوقة لإرسال وتتبع ملاحظاتك الشخصية بطريقة احترافية
            ومنظمة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button className="btn-hero text-lg px-8 py-6" asChild>
              <Link href="/submit-note">
                <FileText className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                إرسال ملاحظة جديدة
              </Link>
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/track-note">
                <Search className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                تتبع ملاحظة موجودة
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
