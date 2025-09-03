import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NoteProps } from "../submit-form.type";
import { NoteSchema } from "../submit-note.validation";
import { useEffect, useState, useTransition } from "react";
import { submitNote } from "../service/submit-note.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DRAFT_KEY = "noteDraft";

export const useSubmitNote = () => {
  const [trackingCode, setTrackingCode] = useState<string>("");
  const [isSubmiting, startTransition] = useTransition();
  const form = useForm<NoteProps>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      noteTitle: "",
      noteContent: "",
      agreeToTerms: false,
    },
  });

  const router = useRouter();

  useEffect(() => {
    const savedDraft = sessionStorage.getItem(DRAFT_KEY);
    if (savedDraft) {
      form.reset(JSON.parse(savedDraft));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBlur = () => {
    const currentData = form.getValues();
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(currentData));
    console.log("Draft saved in sessionStorage:", currentData);
  };

  const onSubmit = (data: NoteProps) => {
    startTransition(async () => {
      sessionStorage.removeItem(DRAFT_KEY);

      const { error, note } = await submitNote(data);

      if (error) {
        toast.error(error.message);
      }

      if (note) {
        toast.success("تم ارسال الملاحظة بنجاح");
        setTrackingCode(note.public_id);
        form.reset();
      }
    });
  };

  const onReset = () => {
    setTrackingCode(" ");
    form.reset();
  };

  const handleTrackNote = () => {
    router.push(`/track-note?trackingCode=${trackingCode}`);
    onReset();
  };

  return {
    form,
    onSubmit,
    handleBlur,
    isSubmiting,
    trackingCode,
    onReset,
    handleTrackNote,
  };
};
