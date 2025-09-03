import { TimelineStep } from "../track-note.type";

export const TIMELINE_STEPS: Omit<TimelineStep, "status" | "date">[] = [
  {
    id: 1,
    title: "تم الاستلام",
    description: "تم استلام ملاحظتك بنجاح",
    currentStep: 1,
  },
  {
    id: 2,
    title: "تحت المراجعة",
    description: "جاري مراجعة ملاحظتك من قبل الفريق المختص",
    currentStep: 2,
  },
  {
    id: 3,
    title: "تحت الدراسة",
    description: "جاري دراسة ملاحظتك والبحث في الحلول المناسبة",
    currentStep: 3,
  },
  {
    id: 4,
    title: "في انتظار معلومات",
    description: "قد نحتاج إلى معلومات إضافية منك",
    currentStep: 4,
  },
  {
    id: 5,
    title: "جاهز للإغلاق",
    description: "تم الانتهاء من معالجة ملاحظتك",
    currentStep: 5,
  },
  {
    id: 6,
    title: "مغلق",
    description: "تم إغلاق الملاحظة",
    currentStep: 6,
  },
];
