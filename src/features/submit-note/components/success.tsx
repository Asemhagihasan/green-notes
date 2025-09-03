import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";
import { SuccessProps } from "../submit-form.type";

const Success: React.FC<SuccessProps> = ({
  trackingCode,
  onReset,
  handleTrackNote,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="note-card animate-fade-in">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-success mb-2">
                تم إرسال الملاحظة بنجاح!
              </h2>

              <div className="success-message">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">
                    رقم التتبع الخاص بك
                  </p>
                  <div className="text-3xl font-bold text-primary font-mono bg-secondary p-4 rounded-lg inline-block">
                    {trackingCode}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    احتفظ بهذا الرقم لتتبع حالة ملاحظتك
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button onClick={onReset} variant="outline" className="flex-1">
                  إرسال ملاحظة جديدة
                </Button>
                <Button onClick={handleTrackNote} className="btn-track flex-1">
                  تتبع الملاحظة
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;
