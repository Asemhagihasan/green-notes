"use client";

import { Send } from "lucide-react";
import Success from "./success";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Form } from "../../../components/ui/form";
import { useSubmitNote } from "@/features/submit-note/hooks/useSubmitNote";
import ControlledInput from "../../../components/ui/controlled-input";
import ControlledTextarea from "../../../components/ui/controlled-textarea";
import ControlledCheckbox from "../../../components/ui/controlled-checkbox.";
import { Button } from "../../../components/ui/button";

const NoteForm = () => {
  const {
    form,
    onSubmit,
    handleBlur,
    isSubmiting,
    trackingCode,
    onReset,
    handleTrackNote,
  } = useSubmitNote();

  if (trackingCode) {
    return (
      <Success
        handleTrackNote={handleTrackNote}
        trackingCode={trackingCode}
        onReset={onReset}
      />
    );
  }

  return (
    <Card className="max-w-3xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle>تفاصيل الملاحظة</CardTitle>
        <CardDescription>
          يرجى ملء جميع البيانات المطلوبة بعناية
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ControlledInput
                name="fullName"
                label="الاسم الكامل *"
                placeholder="الاسم الكامل"
                onBlur={handleBlur}
              />
              <ControlledInput
                name="phoneNumber"
                label="رقم الجوال *"
                placeholder="05xxxxxxxx"
                onBlur={handleBlur}
              />
            </div>
            <ControlledInput
              name="email"
              label="البريد الالكتروني *"
              placeholder="example@email.com"
              onBlur={handleBlur}
            />
            <ControlledInput
              name="noteTitle"
              label="عنوان الملاحظة *"
              placeholder="عنوان مختصر وواضح للملاحظة"
              onBlur={handleBlur}
            />
            <ControlledTextarea
              name="noteContent"
              label="محتوى الملاحظة *"
              placeholder="اكتب تفاصيل ملاحظتك هنا..."
              className="h-32"
              onBlur={handleBlur}
            />
            <ControlledCheckbox
              name="agreeToTerms"
              label="أوافق على الشروط والأحكام وسياسة الخصوصية *"
            />
            <Button type="submit" className="w-full" disabled={isSubmiting}>
              <Send className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              {isSubmiting ? "جاري الإرسال..." : "إرسال الملاحظة"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NoteForm;
