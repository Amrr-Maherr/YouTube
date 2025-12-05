"use client";
import { useMostPopularVideos } from "@/hooks/useMostPopularVideos";
import VideoCard from "../../../components/organisms/VideoCard/Index";
import { VideoSkeletonList } from "@/components/organisms/LoadingSkeleton/VideoSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

function HomeVideosList() {
  const {
    data,
    error,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMostPopularVideos({});

  const Videos = data?.pages.flatMap(page => page.items) || [];

  return (
    <section className="container py-2 mx-auto">
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
              You have seen all videos
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Videos.map((video) => (
              <VideoCard video={video} key={video.id} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </section>
  );
}

export default HomeVideosList;
