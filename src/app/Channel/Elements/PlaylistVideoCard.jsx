"use client";
import React from "react";

export default function PlaylistVideoCard({ video }) {
  const { snippet, contentDetails } = video;

  const thumbnail = snippet?.thumbnails?.high?.url;
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  const publishedAt = new Date(
    contentDetails?.videoPublishedAt
  ).toLocaleDateString();

  return (
    <div className="relative w-full max-w-sm  rounded-lg">
      {/* First card (back) */}
      <div className="absolute inset-0 bg-[#201e1c] rounded-lg -translate-y-2 translate-x-0 shadow-sm mx-2 h-1/2"></div>

      {/* Second card */}
      <div
        className="absolute inset-0 bg-[#937f75] rounded-lg -translate-y-1 translate-x-0 shadow-sm mx-2  h-1/2"
      ></div>

      {/* Third card (front) with data */}
      <div className="relative flex flex-col h-full rounded-lg shadow-lg z-10 hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
        <div className="relative flex-1">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
