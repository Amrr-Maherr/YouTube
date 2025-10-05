"use client";
import { useState } from "react";
import VideoTags from "./VideoTags";

function VideoDescription({ description, tags }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[var(--light-background-secondary)] p-4 rounded-xl text-sm text-[var(--foreground)] whitespace-pre-line">
      {showMore ? description : description.slice(0, 200) + "..."}
      {description.length > 200 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[var(--foreground)] ml-2 font-medium"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
      <VideoTags tags={tags}/>
    </div>
  );
}

export default VideoDescription;
