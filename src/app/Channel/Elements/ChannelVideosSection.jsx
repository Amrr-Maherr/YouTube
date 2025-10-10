import { memo } from "react";
import VideoCard from "../../../components/VideoCard/Index";

function ChannelVideosSection({ ChannelVideos }) {
  if (!ChannelVideos || ChannelVideos.length === 0) return null;
  console.log(ChannelVideos, "ChannelVideos");
  
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Videos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ChannelVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default memo(ChannelVideosSection);
