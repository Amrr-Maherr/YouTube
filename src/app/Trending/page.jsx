"use client";
import { useMostPopularVideos } from "@/hooks/useMostPopularVideos";
import VideoCard from "@/components/organisms/VideoCard/Index";
import { VideoSkeletonList } from "@/components/organisms/LoadingSkeleton/VideoSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { Flame } from "lucide-react";

function Page() {
  const {
    data,
    error,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useMostPopularVideos({});

  const Videos = data?.pages.flatMap(page => page.items) || [];

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <Flame className="w-8 h-8 text-red-500" />
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Trending
        </h1>
      </div>

      {/* Content */}
      {loading && Videos.length === 0 ? (
        <VideoSkeletonList />
      ) : (
        <InfiniteScroll
          dataLength={Videos.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<VideoSkeletonList />}
          endMessage={
            <p className="text-center text-gray-400 mt-4">
              You have seen all trending videos
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            {Videos.map((video) => (
              <VideoCard video={video} key={video.id} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error.message}</p>}
    </section>
  );
}

export default Page;
