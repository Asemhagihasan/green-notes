import { trackNote } from "@/services/index.service";
import { NoteData } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export const useTrackingNote = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [noteData, setNoteData] = useState<NoteData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleTrackingCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) return;
    setTrackingCode(e.target.value);
  };

  const handleTrack = async () => {
    if (!trackingCode.trim()) {
      toast.error("يرجى ادخال رقم التتبع");
      return;
    }

    setIsLoading(true);

    const { error, note } = await trackNote(trackingCode);

    if (error) {
      toast.error("لم يتم العثور على الملاحظة تأكد من رقم التتبع");
    }

    if (note) {
      toast.success("تم العثور على الملاحظة");

      const { full_name, phone_number, email, note_title, note_content } = note;
      setNoteData({
        fullName: full_name,
        phoneNumber: phone_number,
        email,
        noteTitle: note_title,
        noteContent: note_content,
        trackingCode: note.public_id,
        submissionDate: note.created_at,
        currentStep: note.current_step,
      });
      setShowReset(true);
    }

    setIsLoading(false);
  };

  const resetSearch = () => {
    setTrackingCode("");
    setNoteData(null);
    setIsLoading(false);
    setShowReset(false);
  };

  return {
    trackingCode,
    handleTrackingCodeChange,
    handleTrack,
    resetSearch,
    noteData,
    isLoading,
    showReset,
  };
};
