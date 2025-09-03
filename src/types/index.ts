import { LucideIcon } from "lucide-react";

export interface NoteData {
  fullName: string;
  phoneNumber: string;
  email: string;
  noteTitle: string;
  noteContent: string;
  trackingCode: string;
  submissionDate: string;
  currentStep: number;
}

export interface NoteStep {
  id: number;
  note_id: number;
  step_number: number;
  step_note: string;
  created_at: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}
