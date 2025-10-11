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

  return (
    <div className="space-y-8">
      {/* Featured Video */}
      {featuredVideo && (
        <div className="w-full">
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Featured Video
          </h2>
          <iframe
            className="w-full h-100 md:h-screen rounded-xl"
            src={`https://www.youtube.com/embed/${featuredVideo.snippet.resourceId.videoId}`}
            title={featuredVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Latest Uploads */}
      {safeVideos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Latest Uploads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {safeVideos.slice(0, 6).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* Latest PlayLists */}
      {safeVideos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
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
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            About
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </p>
        </div>
      )}
    </div>
  );
}
