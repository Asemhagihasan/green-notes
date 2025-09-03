import { NoteData, NoteStep } from "@/types";

export interface TrackingSearchProps {
  trackingCode: string;
  isLoading: boolean;
  onTrackingCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTrack: () => void;
  resetSearch: () => void;
  showReset: boolean;
}

export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  status: "completed" | "active" | "pending";
  date?: string;
  internalNote?: string;
  currentStep: number;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export interface NoteDetailsProps {
  noteData: NoteData;
  noteSteps: NoteStep[];
}
