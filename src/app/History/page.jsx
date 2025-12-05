"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useVideoDetails } from "@/hooks/useVideoDetails";
import VideoCard from "@/components/organisms/VideoCard/Index";
import { Clock, Trash2, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [history, setHistory] = useLocalStorage("watchHistory", []);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter history based on search
  const filteredHistory = history.filter(video =>
    video.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearHistory = () => {
    setHistory([]);
  };

  const removeFromHistory = (videoId) => {
    setHistory(history.filter(video => video.id !== videoId));
  };

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            History
          </h1>
        </div>

        {history.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[var(--card)] border border-gray-700 rounded-lg text-[var(--foreground)] placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <button
              onClick={clearHistory}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            History is empty
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Videos you watch will appear here
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Explore Videos
          </Link>
        </div>
      ) : filteredHistory.length === 0 && searchQuery ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <Search className="w-12 h-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            No results found
          </h2>
          <p className="text-gray-400">
            No videos in history match your search
          </p>
        </div>
      ) : (
        <div className="space-y-2 px-4">
          {filteredHistory.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 bg-[var(--card)] rounded-lg p-3 hover:bg-[var(--accent)] transition-colors group"
            >
              <Link href={`/VideoDetails/${video.id}`}>
                <div className="flex items-center gap-4 flex-1">
                  {video.thumbnail && (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--foreground)] text-sm line-clamp-1 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {video.channelTitle} • Watched on {new Date(video.watchedAt || Date.now()).toLocaleDateString('en-US')}
                    </p>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => removeFromHistory(video.id)}
                className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-700 rounded-full transition-all duration-200"
                title="Remove from history"
              >
                <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Page;
