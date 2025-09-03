import {
  Check,
  Clock,
  FileSearch,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TimelineProps } from "../track-note.type";

const stepIcons = {
  1: FileSearch,
  2: Clock,
  3: AlertTriangle,
  4: Clock,
  5: CheckCircle,
  6: XCircle,
};

const Timeline = ({ steps, className }: TimelineProps = { steps: [] }) => {
  return (
    <div className={cn("space-y-6", className)}>
      {steps.map((step, index) => {
        const Icon = stepIcons[step.id as keyof typeof stepIcons] || Clock;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="timeline-step">
            {/* Timeline Line */}
            {!isLast && (
              <div
                className={cn(
                  "absolute right-4 top-12 w-0.5 h-full",
                  step.status === "completed" ? "bg-primary" : "bg-border"
                )}
              />
            )}

            {/* Timeline Icon */}
            <div
              className={cn(
                "timeline-icon",
                step.status === "completed" && "completed",
                step.status === "active" && "active",
                step.status === "pending" && "pending"
              )}
            >
              {step.status === "completed" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Icon className="w-4 h-4" />
              )}
            </div>

            {/* Timeline Content */}
            <div className="flex-1 min-w-0 pr-0 pl-4">
              <div className="flex items-center justify-between">
                <h3
                  className={cn(
                    "text-sm font-medium",
                    step.status === "completed" && "text-success",
                    step.status === "active" && "text-primary",
                    step.status === "pending" && "text-muted-foreground"
                  )}
                >
                  {step.title}
                </h3>
                {step.date && (
                  <time className="text-xs text-muted-foreground">
                    {step.date}
                  </time>
                )}
              </div>

              <p className="text-sm text-muted-foreground mt-1 mb-2">
                {step.description}
              </p>

              {step.internalNote && (
                <div className="mt-2 p-2 bg-background rounded-md border border-border">
                  <p className="text-xs text-accent-foreground">
                    <strong>ملاحظة داخلية:</strong> {step.internalNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
