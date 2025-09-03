import z from "zod";
import { NoteSchema } from "./submit-note.validation";

export type NoteProps = z.infer<typeof NoteSchema>;

export interface SuccessProps {
  trackingCode: string;
  onReset: () => void;
  handleTrackNote: () => void;
}
