import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TIMELINE_STEPS } from "@/features/track-note/constants/tracking.constants";
import { Save } from "lucide-react";
import { useUpdateNote } from "../hooks/useUpdateNote";

const UpdateNote: React.FC<{ trackingCode: string; currntStep: number }> = ({
  trackingCode,
  currntStep,
}) => {
  const {
    selectedStep,
    setSelectedStep,
    internalNote,
    setInternalNote,
    handleSave,
    isUpdating,
  } = useUpdateNote(trackingCode, currntStep);

  return (
    <Card className="note-card">
      <CardHeader>
        <CardTitle>تحديث الحالة</CardTitle>
        <CardDescription>
          قم بتحديث حالة الملاحظة وإضافة ملاحظات داخلية
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            الحالة الحالية:
          </label>
          <Select value={selectedStep} onValueChange={setSelectedStep}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="اختر الحالة" />
            </SelectTrigger>
            <SelectContent>
              {TIMELINE_STEPS.map((step) => (
                <SelectItem
                  key={step.title}
                  value={step.currentStep.toString()}
                >
                  {step.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            ملاحظة داخلية:
          </label>
          <Textarea
            placeholder="أضف ملاحظة داخلية حول هذه المرحلة..."
            value={internalNote}
            onChange={(e) => setInternalNote(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <Button
          onClick={handleSave}
          className="btn-hero w-full"
          disabled={!selectedStep || isUpdating}
        >
          <Save className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
          {isUpdating ? "جاري التحديث..." : "حفظ"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpdateNote;
