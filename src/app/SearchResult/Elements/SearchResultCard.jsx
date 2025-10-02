import Link from "next/link";
import React from "react";

function SearchResultCard({ video }) {
  const { snippet, id } = video;
  const { title, channelTitle, thumbnails, description, publishedAt } = snippet;

  return (
    <>
      <Link href="/" key={id.videoId}>
        <div className="flex items-start p-4 shadow-md rounded-lg mb-4">
          <img
            src={thumbnails.high.url}
            alt={title}
            className="w-full h-30  md:w-100 md:h-60 object-cover rounded-md mr-4"
          />
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
        </div>
      </Link>
    </>
  );
}

export default SearchResultCard;
