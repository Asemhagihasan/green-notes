import { supabase } from "@/lib/subabaseClient";
import { NoteProps } from "../submit-form.type";

export async function submitNote(data: NoteProps) {
  const trackingCode = Math.floor(10000 + Math.random() * 90000).toString();

  const { fullName, phoneNumber, email, noteTitle, noteContent } = data;

  const { data: notes, error } = await supabase
    .from("notes")
    .insert([
      {
        public_id: trackingCode,
        full_name: fullName,
        phone_number: phoneNumber,
        email,
        note_title: noteTitle,
        note_content: noteContent,
        current_step: 1,
      },
    ])
    .select();

  return {
    note: notes?.[0] ?? null,
    error,
  };
}
