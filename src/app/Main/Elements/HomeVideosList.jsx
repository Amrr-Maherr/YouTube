"use client";
import { FetchMostPopularVideos } from "@/Store/MostPopularVideosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../../components/VideoCard/Index";
import { VideoSkeletonList } from "@/components/LoadingSkeleton/VideoSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

function HomeVideosList() {
  const Videos = useSelector((state) => state.MostPopularVideos.data);
  const error = useSelector((state) => state.MostPopularVideos.error);
  const loading = useSelector((state) => state.MostPopularVideos.loading);
  const nextPageToken = useSelector(
    (state) => state.MostPopularVideos.nextPageToken
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMostPopularVideos({}));
  }, [dispatch]);

  const fetchMore = () => {
    if (nextPageToken) {
      dispatch(FetchMostPopularVideos({ pageToken: nextPageToken }));
    }
  };

  return (
    <section className="container py-2 mx-auto">
      {loading && Videos.length === 0 ? (
        <VideoSkeletonList />
      ) : (
        <InfiniteScroll
          dataLength={Videos.length}
          next={fetchMore}
          hasMore={!!nextPageToken}
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
