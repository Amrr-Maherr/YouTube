"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import VideoCard from "@/components/organisms/VideoCard/Index";
import { Heart, PlayCircle, Trash2 } from "lucide-react";
import Link from "next/link";

function Page() {
  const [likedVideos, , { removeItem }] = useLocalStorage("likedVideos", []);

  const removeFromLiked = (videoId) => {
    removeItem(videoId);
  };

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <Heart className="w-8 h-8 text-red-500" />
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Liked Videos
        </h1>
      </div>

      {/* Content */}
      {likedVideos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            No liked videos yet
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Click the heart icon on any video you like and you'll find it here
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Explore Videos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {likedVideos.map((video) => (
            <div key={video.id} className="relative group">
              {/* Video Card */}
              <VideoCard video={video} />

              {/* Action Buttons */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                <Link
                  href={`/VideoDetails/${video.id}`}
                  className="p-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-all duration-200"
                  title="Watch now"
                >
                  <PlayCircle className="w-4 h-4 text-green-500" />
                </Link>
                <button
                  onClick={() => removeFromLiked(video.id)}
                  className="p-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-all duration-200"
                  title="Remove from liked"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>

              {/* Heart Icon */}
              <div className="absolute top-2 left-2">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {likedVideos.length > 0 && (
        <div className="mt-8 px-4">
          <div className="bg-[var(--card)] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                You have {likedVideos.length} liked video{likedVideos.length !== 1 ? 's' : ''}
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Keep liking more videos
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Page;
