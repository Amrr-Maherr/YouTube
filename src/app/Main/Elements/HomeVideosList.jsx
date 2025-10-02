"use client"
import { FetchMostPopularVideos } from "@/Store/MostPopularVideosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../../components/VideoCard/Index"
import { VideoSkeletonList } from "@/components/LoadingSkeleton/VideoSkeleton";
function HomeVideosList() {
  const Videos = useSelector((state) => state.MostPopularVideos.data);
  const error = useSelector((state) => state.MostPopularVideos.error);
  const loading = useSelector((state) => state.MostPopularVideos.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMostPopularVideos());
  }, [dispatch]);
  return (
    <section>
      {loading ? (
        <VideoSkeletonList />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Videos.length > 0
            ? Videos.map((video) => <VideoCard video={video} key={video.id} />)
            : loading && (
                <p className="text-red-500 text-center col-span-full">
                  Sorry, no videos available
                </p>
              )}
        </div>
      )}
    </section>
  );
}

export default HomeVideosList;