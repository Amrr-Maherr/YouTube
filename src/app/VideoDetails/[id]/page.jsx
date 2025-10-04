"use client";
import VideoDetailsSkeleton from "@/components/LoadingSkeleton/VideoDetailsSkeleton";
import { FetchRelatedVideos } from "@/Store/RelatedVideosSlice";
import { FetchVideoDetails } from "@/Store/VideoDetailsSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoDetailsCard from "../Elements/VideoDetailsCard";
import { FetchChannelDetails } from "@/Store/ChannelSlice";
import { FetchVideoComments } from "@/Store/VideoCommentsSlice";
import VideoComments from "../Comments/VideoComments";

function Page() {
  const { id } = useParams();
  const videoDetails = useSelector((state) => state.VideoDetails.data);
  const Comments = useSelector((state) => state.VideoComments.data);
  const ChannelDetails = useSelector((state) => state.Channel.data);
  const loading = useSelector((state) => state.VideoDetails.loading);
  const error = useSelector((state) => state.VideoDetails.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(FetchVideoDetails(id));
      dispatch(FetchRelatedVideos(id));
      dispatch(FetchVideoComments(id));
    }
  }, [id, dispatch]);
console.log(Comments,"com");

  useEffect(() => {
    if (videoDetails?.length > 0) {
      const channelId = videoDetails[0]?.snippet?.channelId;
      dispatch(FetchChannelDetails(channelId));
    }
  }, [videoDetails, dispatch]);
  if (loading) {
    return <VideoDetailsSkeleton />;
  }
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  return (
    <section className="container mx-auto">
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoDetails?.length > 0 && (
          <div className=" col-span-12 md:col-span-2">
            <VideoDetailsCard
              video={videoDetails[0]}
              id={id}
              ChannelDetails={ChannelDetails}
            />
          </div>
        )}
        <div className="col-span-12 md:col-span-2">
          <VideoComments comments={Comments} />
        </div>
      </div>
    </section>
  );
}

export default Page;
