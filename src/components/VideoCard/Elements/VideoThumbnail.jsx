// src/components/Video/VideoThumbnail.jsx
import Image from "next/image";

function VideoThumbnail({ video }) {
  return (
    <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-800">
      <Image
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* 
      <img
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}
    </div>
  );
}

export default VideoThumbnail;
