import React from "react";

function VideoInfo({ title, channelTitle, description }) {
  return (
    <div className="flex flex-col justify-between">
      <h4 className="text-base sm:text-lg md:text-xl font-semibold line-clamp-2">
        {title}
      </h4>
      <p className="text-xs sm:text-sm md:text-base text-[var(--foreground)] my-2 sm:my-4">
        {channelTitle}
      </p>
      <p className="text-xs sm:text-sm md:text-base text-[var(--foreground)] line-clamp-2">
        {description}
      </p>
    </div>
  );
}

export default VideoInfo;
