"use client";
import { useState } from "react";

function VideoDescription({ description, tags }) {
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
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-blue-400 hover:text-blue-500 cursor-pointer text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoDescription;
