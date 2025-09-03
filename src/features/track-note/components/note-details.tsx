import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, FileText, Mail, Phone, User } from "lucide-react";
import React from "react";
import Timeline from "./timeline";
import { useTimelineSteps } from "../hooks/useTimelineSteps";
import { NoteDetailsProps } from "../track-note.type";
import { formatDate } from "@/utils/date";

const NoteDetails: React.FC<NoteDetailsProps> = ({ noteData, noteSteps }) => {
  const timelineSteps = useTimelineSteps(noteData, noteSteps);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">
      {/* Note Details */}
      <div className="lg:col-span-1">
        <Card className="note-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              تفاصيل الملاحظة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">
                {noteData.noteTitle}
              </h3>
              <p className="text-sm text-muted-foreground">
                {noteData.noteContent}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span>{noteData.fullName}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{noteData.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>{noteData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{formatDate(noteData.submissionDate)}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">رقم التتبع:</span>
                <Badge variant="outline" className="font-mono">
                  {noteData.trackingCode}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="lg:col-span-2">
        <Card className="note-card">
          <CardHeader>
            <CardTitle>حالة الملاحظة</CardTitle>
            <CardDescription>تتبع مراحل معالجة ملاحظتك</CardDescription>
          </CardHeader>
          <CardContent>
            <Timeline steps={timelineSteps} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoteDetails;
