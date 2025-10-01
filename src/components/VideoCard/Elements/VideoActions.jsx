// src/components/Video/VideoActions.jsx
import { EllipsisVertical } from "lucide-react";

function VideoActions() {
  return (
    <div className="hover:bg-[#272727] rounded-full w-[36px] h-[36px] flex items-center justify-center">
      <EllipsisVertical className="text-white" />
    </div>
  );
}

export default VideoActions;
