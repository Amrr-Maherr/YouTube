"use client";
import VideoDetailsSkeleton from "@/components/LoadingSkeleton/VideoDetailsSkeleton";
import { FetchRelatedVideos } from "@/Store/RelatedVideosSlice";
import { FetchVideoDetails } from "@/Store/VideoDetailsSlice";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoDetailsCard from "../Elements/VideoDetailsCard";
import { FetchChannelDetails } from "@/Store/ChannelSlice";
import { FetchVideoComments } from "@/Store/VideoCommentsSlice";
import VideoComments from "../Comments/VideoComments";
import { FetchMostPopularVideos } from "@/Store/MostPopularVideosSlice";
import VideoCard from "../../../components/VideoCard/Index";
import useVideoTitle from "@/hooks/useVideoTitle";
function Page() {
  const { id } = useParams();
  const videoDetails = useSelector((state) => state.VideoDetails.data);
  const RelatedVideos = useSelector((state) => state.RelatedVideos.data);
  const Comments = useSelector((state) => state.VideoComments.data);
  const ChannelDetails = useSelector((state) => state.Channel.data);
  const loading = useSelector((state) => state.VideoDetails.loading);
  const error = useSelector((state) => state.VideoDetails.error);
  const dispatch = useDispatch();
  const [title,setTitle] = useState("")

  useEffect(() => {
    if (id) {
      dispatch(FetchMostPopularVideos({}));
      dispatch(FetchVideoDetails(id));
      dispatch(FetchVideoComments(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (videoDetails?.length > 0) {
      const channelId = videoDetails[0]?.snippet?.channelId;
      const query = videoDetails[0]?.snippet?.title.slice(0, 20);
      const queryTitle = videoDetails[0]?.snippet?.title;
      setTitle(queryTitle);
      console.log(queryTitle, "queryTitle");
      dispatch(FetchChannelDetails(channelId));
      dispatch(FetchRelatedVideos(query));
    }
  }, [videoDetails, dispatch, id]);
  
  useVideoTitle(title);
  if (loading) {
    return <VideoDetailsSkeleton />;
  }
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  return (
    <>
      <section className="container mx-auto">
        <div className="space-y-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {videoDetails?.length > 0 && (
            <div className=" col-span-12 md:col-span-3">
              <VideoDetailsCard
                video={videoDetails[0]}
                id={id}
                ChannelDetails={ChannelDetails}
              />
              <VideoComments comments={Comments} />
            </div>
          )}
          <div className="col-span-12 md:col-span-1">
            {RelatedVideos.map((video) => (
              <VideoCard video={video} key={video.id.videoId || video.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
