import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            الشروط والأحكام
          </h1>
        </div>

        <div className="space-y-6">
          <Card className="note-card">
            <CardHeader>
              <CardTitle>قبول الشروط</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                باستخدامك لنظام الملاحظات الشخصية، فإنك توافق على الالتزام بهذه
                الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم
                استخدام النظام.
              </p>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>استخدام النظام</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                يجب عليك الالتزام بالقواعد التالية عند استخدام النظام:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>تقديم معلومات صحيحة ودقيقة</li>
                <li>عدم إرسال محتوى مسيء أو غير قانوني</li>
                <li>احترام حقوق الآخرين والخصوصية</li>
                <li>عدم محاولة اختراق النظام أو إلحاق الضرر به</li>
                <li>استخدام النظام للأغراض المشروعة فقط</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>المسؤوليات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">مسؤولياتك:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                  <li>الحفاظ على سرية رقم التتبع</li>
                  <li>تقديم معلومات دقيقة</li>
                  <li>الالتزام بالاستخدام المشروع</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">مسؤولياتنا:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                  <li>معالجة الملاحظات بطريقة مهنية</li>
                  <li>حماية معلوماتك الشخصية</li>
                  <li>توفير خدمة عالية الجودة</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>القيود والمحظورات</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                يُحظر استخدام النظام للأنشطة التالية:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>إرسال محتوى مسيء أو تهديدي</li>
                <li>انتهاك حقوق الملكية الفكرية</li>
                <li>نشر معلومات كاذبة أو مضللة</li>
                <li>محاولة الوصول غير المصرح به</li>
                <li>إرسال فيروسات أو برامج ضارة</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>إخلاء المسؤولية</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                يتم توفير النظام &quot;كما هو&quot; دون أي ضمانات صريحة أو
                ضمنية. لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة قد
                تنتج عن استخدام النظام.
              </p>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>التعديلات</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك
                بأي تغييرات جذرية قبل دخولها حيز التنفيذ.
              </p>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>القانون المطبق</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي
                نزاع ينشأ من استخدام النظام سيتم حله وفقاً للقوانين المحلية.
              </p>
            </CardContent>
          </Card>

          <Card className="note-card">
            <CardHeader>
              <CardTitle>التواصل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                لأي استفسارات حول الشروط والأحكام، يمكنك التواصل معنا:
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>البريد الإلكتروني: legal@personalnotes.com</p>
                <p>الهاتف: +966 11 123 4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
