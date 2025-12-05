"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import VideoCard from "@/components/VideoCard/Index";
import { Clock3, PlayCircle, Trash2 } from "lucide-react";
import Link from "next/link";

function Page() {
  const [watchLater, , { removeItem }] = useLocalStorage("watchLater", []);

  const removeFromWatchLater = (videoId) => {
    removeItem(videoId);
  };

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <Clock3 className="w-8 h-8 text-green-500" />
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Watch Later
        </h1>
      </div>

      {/* Content */}
      {watchLater.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <PlayCircle className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            No saved videos
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Save videos you want to watch later and they'll appear here
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Explore Videos
          </Link>
        </div>
      ) : (
        <div className="space-y-4 px-4">
          {watchLater.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 bg-[var(--card)] rounded-lg p-4 hover:bg-[var(--accent)] transition-colors group"
            >
              <Link href={`/VideoDetails/${video.id}`}>
                <div className="flex items-center gap-4 flex-1">
                  {video.thumbnail && (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--foreground)] text-lg mb-1 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">
                      {video.channelTitle}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Saved on {new Date(video.savedAt || Date.now()).toLocaleDateString('en-US')}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href={`/VideoDetails/${video.id}`}
                  className="p-2 hover:bg-green-600 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  title="Watch now"
                >
                  <PlayCircle className="w-6 h-6 text-green-500" />
                </Link>
                <button
                  onClick={() => removeFromWatchLater(video.id)}
                  className="p-2 hover:bg-red-600 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  title="Remove from Watch Later"
                >
                  <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {watchLater.length > 0 && (
        <div className="mt-8 px-4">
          <div className="bg-[var(--card)] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Clock3 className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                You have {watchLater.length} saved video{watchLater.length !== 1 ? 's' : ''}
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Keep saving more videos to watch later
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Page;
