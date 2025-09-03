import z from "zod";

export const NoteSchema = z.object({
  fullName: z
    .string()
    .min(1, "الاسم الكامل مطلوب")
    .refine((val) => {
      const words = val.trim().split(/\s+/);
      return words.length >= 3;
    }, "يجب أن يحتوي الاسم الكامل على 3 كلمات على الأقل")
    .refine((val) => {
      const words = val.trim().split(/\s+/);
      return words.every((word) => word.length > 3);
    }, "كل كلمة يجب أن تكون أكثر من 3 أحرف"),
  phoneNumber: z
    .string()
    .min(1, "رقم الجوال مطلوب")
    .regex(/^05\d{8}$/, "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"),
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صحيح"),
  noteTitle: z
    .string()
    .min(10, "العنوان يجب ان يكون اكثر من 10 حروف")
    .max(100, "العنوان يجب ان يكون اقل من 100 حروف"),
  noteContent: z.string().min(50, "الملاحظة يجب ان تكون اكثر من 50 حروف"),
  agreeToTerms: z.boolean().refine((val) => val, "يجب قبول الشروط والسياسات"),
});
