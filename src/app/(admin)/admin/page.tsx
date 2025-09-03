"use client";

import TrackingSearch from "@/features/admin-panel/components/tracking-search";
import NoteDetails from "@/features/admin-panel/components/note-detailes";
import UpdateNote from "@/features/admin-panel/components/update-note";
import { Settings } from "lucide-react";
import { useTrackingNote } from "@/features/admin-panel/hooks/useTrackingNote";

const AdminPanelPage = () => {
  const {
    trackingCode,
    handleTrackingCodeChange,
    handleTrack,
    resetSearch,
    noteData,
    isLoading,
    showReset,
  } = useTrackingNote();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            لوحة التحكم
          </h1>
        </div>

        <TrackingSearch
          onTrackingCodeChange={handleTrackingCodeChange}
          onTrack={handleTrack}
          trackingCode={trackingCode}
          isLoading={isLoading}
          resetSearch={resetSearch}
          showReset={showReset}
        />

        {noteData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up">
            <NoteDetails noteData={noteData} />

            <UpdateNote
              trackingCode={trackingCode}
              currntStep={noteData.currentStep}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanelPage;
