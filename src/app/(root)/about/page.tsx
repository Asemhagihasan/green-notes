import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Target, Users, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">من نحن</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <VisionMissionCard
            icon={<Target className="w-8 h-8 text-primary" />}
            title="رؤيتنا"
            content="نسعى لتكون منصة الملاحظات الشخصية الرائدة في المنطقة، حيث نوفر حلولاً مبتكرة وآمنة لإدارة وتتبع الملاحظات بطريقة احترافية ومنظمة."
          />

          <VisionMissionCard
            icon={<Users className="w-8 h-8 text-primary" />}
            title="مهمتنا"
            content="تسهيل عملية إرسال وتتبع الملاحظات الشخصية مع ضمان أعلى مستويات الأمان والخصوصية، وتوفير تجربة مستخدم متميزة وسهلة الاستخدام."
          />
        </div>

        <Card className="note-card mb-8">
          <CardHeader>
            <CardTitle>نبذة عن النظام</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              نظام الملاحظات الشخصية هو منصة رقمية متطورة تهدف إلى تسهيل عملية
              إرسال وتتبع الملاحظات والاستفسارات الشخصية. تم تصميم النظام ليكون
              سهل الاستخدام ومتاح على مدار الساعة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureItem
                icon={<Shield className="w-5 h-5 text-primary" />}
                title="الأمان والخصوصية"
                description="نضمن حماية بياناتك الشخصية والحفاظ على خصوصيتها"
              />

              <FeatureItem
                icon={<Target className="w-5 h-5 text-primary" />}
                title="سهولة الاستخدام"
                description="واجهة بسيطة وسهلة الاستخدام لجميع المستخدمين"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="note-card">
          <CardHeader>
            <CardTitle>تواصل معنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              نحن هنا لمساعدتك. إذا كان لديك أي استفسارات أو اقتراحات، لا تتردد
              في التواصل معنا.
            </p>
            <div className="space-y-2 text-sm">
              <ContactInfo
                label="البريد الإلكتروني"
                value="info@personalnotes.com"
              />
              <ContactInfo label="الهاتف" value="+966 11 123 4567" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const VisionMissionCard = ({
  icon,
  title,

  content,
}: {
  icon: React.ReactNode;
  title: string;

  content: string;
}) => (
  <Card className="note-card">
    <CardHeader>
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{content}</p>
    </CardContent>
  </Card>
);

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
  <p className="text-muted-foreground">
    <span className="font-medium">{label}:</span> {value}
  </p>
);

export default AboutPage;
