"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import VideoCard from "@/components/VideoCard/Index";
import { VideoIcon, UserPlus, Users } from "lucide-react";
import Link from "next/link";

function Page() {
  const [subscriptions] = useLocalStorage("subscriptions", []);

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <Users className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Subscriptions
        </h1>
      </div>

      {/* Content */}
      {subscriptions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <VideoIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            No subscriptions yet
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Subscribe to your favorite channels to see their videos here
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Explore Channels
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {subscriptions.map((channel) => (
            <Link
              key={channel.id}
              href={`/Channel/${channel.id}`}
              className="block hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-[var(--card)] rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                {channel.thumbnail && (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={channel.thumbnail}
                      alt={channel.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2 line-clamp-1">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Subscribed on {new Date(channel.subscribedAt || Date.now()).toLocaleDateString('en-US')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      {subscriptions.length > 0 && (
        <div className="mt-8 px-4">
          <div className="bg-[var(--card)] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Discover more channels
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Search for topics that interest you or discover new content
            </p>
            <div className="flex gap-3">
              <Link
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Browse
              </Link>
              <Link
                href="/SearchResult"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Page;
