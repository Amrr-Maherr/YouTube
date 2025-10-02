import Link from "next/link";
import React from "react";
import VideoThumbnail from "./VideoThumbnail";
import VideoInfo from "./VideoInfo";

function SearchResultCard({ video }) {
  const { snippet, id } = video;
  const { title, channelTitle, thumbnails, description, publishedAt } = snippet;

  return (
    <>
      <Link href="/" key={id.videoId}>
        <div className="flex items-start p-4 shadow-md rounded-lg mb-4">
          <VideoThumbnail url={thumbnails.high.url} title={title} />
          <VideoInfo
            title={title}
            channelTitle={channelTitle}
            description={description}
          />
        </div>
      </Link>
    </>
  );
}

export default SearchResultCard;
