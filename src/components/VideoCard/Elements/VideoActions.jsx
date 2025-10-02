// src/components/Video/VideoActions.jsx
import { EllipsisVertical } from "lucide-react";

function VideoActions() {
  return (
    <div className="hover:bg-[var(--background)] rounded-full w-[36px] h-[36px] flex items-center justify-center">
      <EllipsisVertical className="text-[var(--foreground)]" />
    </div>
  );
}

export default VideoActions;
