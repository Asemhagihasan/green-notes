import { useMemo } from "react";

import { formatDate } from "@/utils/date";
import { TimelineStep } from "../track-note.type";
import { TIMELINE_STEPS } from "../constants/tracking.constants";
import { NoteData, NoteStep } from "@/types";

export const useTimelineSteps = (
  noteData: NoteData | null,
  noteSteps: NoteStep[] | null
): TimelineStep[] => {
  return useMemo(() => {
    if (!noteData) return [];

    return TIMELINE_STEPS.map((step) => ({
      ...step,
      status:
        step.id < noteData.currentStep
          ? "completed"
          : step.id === noteData.currentStep
          ? "active"
          : "pending",
      date: step.id === 1 ? formatDate(noteData.submissionDate) : undefined,
      internalNote: noteSteps?.find((ns) => ns.step_number == step.currentStep)
        ?.step_note,
    }));
  }, [noteData, noteSteps]);
};
