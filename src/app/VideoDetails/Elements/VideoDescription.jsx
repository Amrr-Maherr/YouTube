"use client";
import { useState } from "react";

function VideoDescription({ description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#3f3f3f] p-4 rounded-xl text-sm text-[var(--foreground)] whitespace-pre-line">
      {showMore ? description : description.slice(0, 200) + "..."}
      {description.length > 200 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[var(--foreground)] ml-2 font-medium"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
export default VideoDescription;
