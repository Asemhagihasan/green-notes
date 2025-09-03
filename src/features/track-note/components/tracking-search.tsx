"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { TrackingSearchProps } from "../track-note.type";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const TrackingSearch: React.FC<TrackingSearchProps> = ({
  trackingCode,
  onTrackingCodeChange,
  onTrack,
  isLoading,
  resetSearch,
  showReset,
}) => {
  return (
    <Card className="animate-fade-in mb-8">
      <CardHeader>
        <CardTitle>البحث عن الملاحظة</CardTitle>
        <CardDescription>أدخل رقم التتبع المكون من 5 أرقام</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="أدخل رقم التتبع (5 أرقام)"
            value={trackingCode}
            onChange={onTrackingCodeChange}
            maxLength={5}
            className="text-center text-lg font-mono"
            type="number"
          />
          <div className="flex gap-2">
            <Button
              onClick={onTrack}
              disabled={isLoading}
              className="btn-track min-w-[120px] cursor-pointer"
            >
              <Search className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              {isLoading ? "جاري البحث..." : "تتبع"}
            </Button>
            {showReset && (
              <Button
                variant="outline"
                onClick={resetSearch}
                disabled={isLoading}
              >
                بحث جديد
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingSearch;
