export interface TrackingSearchProps {
  trackingCode: string;
  onTrackingCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTrack: () => void;
  isLoading: boolean;
  resetSearch: () => void;
  showReset: boolean;
}
