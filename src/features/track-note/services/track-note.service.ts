import { supabase } from "@/lib/subabaseClient";

export const getNotSteps = async (noteId: string) => {
  const { data: steps, error } = await supabase
    .from("note_steps")
    .select()
    .eq("note_id", noteId);

  return { steps, error };
};
