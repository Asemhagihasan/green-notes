"use client";

import NoteDetails from "@/features/track-note/components/note-details";
import TrackingSearch from "@/features/track-note/components/tracking-search";
import { useTrackingNote } from "@/features/track-note/hooks/useTrackingNote";
import { Search } from "lucide-react";
import React, { Suspense } from "react";

const NoteTrackContent = () => {
  const {
    trackingCode,
    handleTrackingCodeChange,
    handleTrack,
    noteData,
    isLoading,
    resetSearch,
    showReset,
    noteSteps,
  } = useTrackingNote();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            تتبع الملاحظة
          </h1>
          <p className="text-muted-foreground">
            تتبع حالة ملاحظتك من خلال رقم التتبع
          </p>
        </header>

        <TrackingSearch
          onTrackingCodeChange={handleTrackingCodeChange}
          onTrack={handleTrack}
          trackingCode={trackingCode}
          isLoading={isLoading}
          resetSearch={resetSearch}
          showReset={showReset}
        />

        {noteData && <NoteDetails noteData={noteData} noteSteps={noteSteps} />}
      </div>
    </div>
  );
};

const NoteTrackPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoteTrackContent />
    </Suspense>
  );
};

export default NoteTrackPage;
