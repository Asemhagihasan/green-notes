import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">سياسة الخصوصية</h1>
        </div>

        <div className="space-y-6">
          <PrivacySection
            title="جمع المعلومات"
            description="نقوم بجمع المعلومات التالية عند استخدامك لنظام الملاحظات الشخصية:"
            items={[
              "الاسم الكامل",
              "رقم الهاتف",
              "البريد الإلكتروني",
              "محتوى الملاحظة",
              "تاريخ ووقت الإرسال",
            ]}
          />

          <PrivacySection
            title="استخدام المعلومات"
            description="نستخدم المعلومات المجمعة للأغراض التالية:"
            items={[
              "معالجة ومتابعة ملاحظاتك",
              "التواصل معك حول حالة الملاحظة",
              "تحسين خدماتنا",
              "الامتثال للمتطلبات القانونية",
            ]}
          />

          <PrivacySection
            title="حماية المعلومات"
            description="نتخذ التدابير الأمنية المناسبة لحماية معلوماتك الشخصية:"
            items={[
              "تشفير البيانات أثناء النقل والتخزين",
              "الوصول المحدود للبيانات",
              "مراقبة أمنية مستمرة",
              "نسخ احتياطية آمنة",
            ]}
          />

          <PrivacySection
            title="مشاركة المعلومات"
            description="لا نقوم بمشاركة معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:"
            items={[
              "بموافقتك الصريحة",
              "للامتثال للمتطلبات القانونية",
              "لحماية حقوقنا القانونية",
            ]}
          />

          <PrivacySection
            title="حقوقك"
            description="لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:"
            items={[
              "طلب الاطلاع على معلوماتك",
              "طلب تصحيح المعلومات غير الصحيحة",
              "طلب حذف معلوماتك",
              "الاعتراض على معالجة معلوماتك",
            ]}
          />

          <Card className="note-card">
            <CardHeader>
              <CardTitle>التواصل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا
                عبر:
              </p>
              <div className="space-y-2 text-sm">
                <ContactInfo
                  label="البريد الإلكتروني"
                  value="privacy@personalnotes.com"
                />
                <ContactInfo label="الهاتف" value="+966 11 123 4567" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PrivacySection = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-muted-foreground">{description}</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
  <p className="text-muted-foreground">
    <span className="font-medium">{label}:</span> {value}
  </p>
);

export default PrivacyPage;
