// src/components/Video/VideoCard.jsx
import Link from "next/link";
import VideoThumbnail from "./Elements/VideoThumbnail";
import VideoInfo from "./Elements/VideoInfo";
import VideoActions from "./Elements/VideoActions";

function Index({ video,className }) {
  const videoId =
    video.id?.videoId || // search results
    video.contentDetails?.videoId || // playlist items
    (typeof video.id === "string" ? video.id : null); // fallback
  return (
    <Link href={`/VideoDetails/${videoId}`}>
      <div className={`w-full ${className ? className : "" } flex-shrink-0 flex-col mb-5 cursor-pointer mx-auto`}>
        <VideoThumbnail video={video} />
        <div className="flex items-center justify-between">
          <VideoInfo video={video} />
          <VideoActions />
        </div>
      </div>
    </Link>
  );
}

export default Index;
