"use client";

import VideoCard from "@/components/VideoCard/Index";
import PlaylistVideoCard from "./PlaylistVideoCard";
import VideoDetailsCard from "@/app/VideoDetails/Elements/VideoDetailsCard";
import VideoThumbnail from "@/app/SearchResult/Elements/VideoThumbnail";

export default function HomeTab({
  ChannelVideos,
  ChannelPlayList,
  description,
}) {
  const safeVideos = Array.isArray(ChannelVideos) ? ChannelVideos : [];
  const safePlaylists = Array.isArray(ChannelPlayList) ? ChannelPlayList : [];

  const featuredVideo =
    safeVideos && safeVideos.length > 0 ? safeVideos[0] : null;
console.log(safePlaylists, "safePlaylists");
// console.log(featuredVideo.snippet.title, "featuredVideo");

  return (
    <div className="space-y-8">
      {/* Featured Video */}
      {featuredVideo ? (
        <div className="w-full">
          <h2 className="text-xl font-bold mb-3 text-white">Featured Video</h2>
          <iframe
            className="w-full h-64 md:h-150 rounded-xl"
            src={`https://www.youtube.com/embed/${featuredVideo.snippet.resourceId.videoId}`}
            title={featuredVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No featured video available</p>
      )}

      {/* Latest Uploads */}
      {safeVideos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">Latest Uploads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {safeVideos.slice(0, 6).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}
      {/* Latest Uploads */}
      {safeVideos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">
            Latest PlayLists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {safeVideos.slice(0, 6).map((video) => (
              <PlaylistVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* About Preview */}
      {description && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">About</h2>
          <p className="text-gray-300">
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </p>
        </div>
      )}
    </div>
  );
}
