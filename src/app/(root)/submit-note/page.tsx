import NoteForm from "@/features/submit-note/components/note-form";
import { FileText } from "lucide-react";
import React from "react";

const SubmitNotePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            إرسال ملاحظة جديدة
          </h1>
        </div>
      </div>

      <NoteForm />
    </div>
  );
};

export default SubmitNotePage;
