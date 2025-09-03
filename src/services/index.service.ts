import { supabase } from "@/lib/subabaseClient";

export const trackNote = async (trackingCode: string) => {
  const { data: note, error } = await supabase
    .from("notes")
    .select()
    .eq("public_id", trackingCode)
    .single();

  return { note, error };
};
