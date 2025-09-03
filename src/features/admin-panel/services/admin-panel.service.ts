import { supabase } from "@/lib/subabaseClient";

export async function updateStep(
  trackingCode: string,
  newStep: number,
  stepNote: string
) {
  const { data: note } = await supabase
    .from("notes")
    .select("id")
    .eq("public_id", trackingCode)
    .single();

  if (!note) throw new Error("Note not found");

  await supabase
    .from("notes")
    .update({ current_step: newStep })
    .eq("id", note.id);

  const { data: existingStep } = await supabase
    .from("note_steps")
    .select("id")
    .eq("note_id", note.id)
    .eq("step_number", newStep)
    .single();

  if (existingStep) {
    await supabase
      .from("note_steps")
      .update({ step_note: stepNote })
      .eq("id", existingStep.id);
  } else {
    await supabase.from("note_steps").insert([
      {
        note_id: note.id,
        step_number: newStep,
        step_note: stepNote,
      },
    ]);
  }
}
