import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">اتصل بنا</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ContactCard
            icon={<Phone className="w-8 h-8 text-primary" />}
            title="الهاتف"
            main="+966 11 123 4567"
            subtitle="متاح من الأحد إلى الخميس، 8:00 ص - 6:00 م"
          />

          <ContactCard
            icon={<Mail className="w-8 h-8 text-primary" />}
            title="البريد الإلكتروني"
            main="support@personalnotes.com"
            subtitle="سنرد على استفساركم خلال 24 ساعة"
          />

          <ContactCard
            icon={<MapPin className="w-8 h-8 text-primary" />}
            title="العنوان"
            main="شارع الملك فهد، الرياض"
            subtitle="المملكة العربية السعودية"
          />

          <ContactCard
            icon={<Clock className="w-8 h-8 text-primary" />}
            title="ساعات العمل"
            main="الأحد - الخميس: 8:00 ص - 6:00 م"
            subtitle="الجمعة - السبت: مغلق"
          />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>أقسام الدعم المتخصصة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SupportCard
                title="الدعم التقني"
                description="للمساعدة في المشاكل التقنية"
                email="tech@personalnotes.com"
              />

              <SupportCard
                title="الاستفسارات العامة"
                description="للأسئلة والاستفسارات العامة"
                email="info@personalnotes.com"
              />

              <SupportCard
                title="الشكاوى والاقتراحات"
                description="لتقديم الشكاوى والاقتراحات"
                email="feedback@personalnotes.com"
              />

              <SupportCard
                title="الأمور القانونية"
                description="للاستفسارات القانونية"
                email="legal@personalnotes.com"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>وسائل التواصل الاجتماعي</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              تابعونا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار
              والتحديثات
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>لينكد إن: @asem-haji-hasan</span>
              <span>إنستغرام: @asem_haji_hasan</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ContactCard = ({
  icon,
  title,
  main,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  main: string;
  subtitle: string;
}) => (
  <Card>
    <CardHeader>
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg font-semibold mb-2">{main}</p>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </CardContent>
  </Card>
);

const SupportCard = ({
  title,
  description,
  email,
}: {
  title: string;
  description: string;
  email: string;
}) => (
  <div className="p-4 border border-border rounded-lg">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground mb-1">{description}</p>
    <p className="text-sm font-medium">{email}</p>
  </div>
);

export default ContactPage;
