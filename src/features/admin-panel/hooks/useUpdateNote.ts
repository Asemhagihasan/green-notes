import { useState, useTransition } from "react";
import { updateStep } from "../services/admin-panel.service";
import { toast } from "sonner";

export const useUpdateNote = (trackingCode: string, currntStep: number) => {
  const [selectedStep, setSelectedStep] = useState<string>(
    String(currntStep) || ""
  );
  const [internalNote, setInternalNote] = useState<string>("");
  const [isUpdating, startTransition] = useTransition();

  const handleSave = () => {
    if (!selectedStep) return;

    startTransition(async () => {
      try {
        await updateStep(trackingCode, Number(selectedStep), internalNote);
        setInternalNote("");
        toast.success("تم التحديث بنجاح");
      } catch (error) {
        console.error(error);
        toast.error("حدث خطأ في التحديث");
      }
    });
  };

  return {
    selectedStep,
    setSelectedStep,
    internalNote,
    setInternalNote,
    handleSave,
    isUpdating,
  };
};
