import React from "react";

function VideoDetailsCard({ video }) {
  if (!video) return null;

  const { snippet } = video;
  const { title, channelTitle, description, publishedAt } = snippet;

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      {/* Video Player */}
      <div className="w-full md:w-2/3">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Video Info */}
        <div className="mt-4">
          <h1 className="text-lg md:text-2xl font-bold line-clamp-2">
            {title}
          </h1>
          <p className="text-sm text-gray-400 mt-1">{channelTitle}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>

        {/* Video Description */}
        <div className="mt-4">
          <p className="text-sm md:text-base text-[var(--foreground)] whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Sidebar (Suggested videos for example) */}
      <div className="hidden md:block w-1/3">
        <div className="p-4 bg-[var(--background)] rounded-lg shadow">
          <p className="text-gray-500">Suggested videos section</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetailsCard;
