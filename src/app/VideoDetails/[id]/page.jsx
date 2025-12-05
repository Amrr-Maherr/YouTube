"use client";
import VideoDetailsSkeleton from "@/components/LoadingSkeleton/VideoDetailsSkeleton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoDetailsCard from "../Elements/VideoDetailsCard";
import VideoComments from "../Comments/VideoComments";
import VideoCard from "../../../components/VideoCard/Index";
import useVideoTitle from "@/hooks/useVideoTitle";
import { useVideoDetails } from "@/hooks/useVideoDetails";
import { useChannelDetails } from "@/hooks/useChannelDetails";
import { useVideoComments } from "@/hooks/useVideoComments";
import { useRelatedVideos } from "@/hooks/useRelatedVideos";
import { useMostPopularVideos } from "@/hooks/useMostPopularVideos";
function Page() {
  const { id } = useParams();
  const { data: videoDetails, isLoading: loading, error } = useVideoDetails(id);
  const [title, setTitle] = useState("");

  const channelId = videoDetails?.length > 0 ? videoDetails[0]?.snippet?.channelId : null;
  const query = videoDetails?.length > 0 ? videoDetails[0]?.snippet?.title.slice(0, 20) : null;
  const queryTitle = videoDetails?.length > 0 ? videoDetails[0]?.snippet?.title : null;

  const { data: RelatedVideos = [] } = useRelatedVideos(query);
  const { data: Comments } = useVideoComments(id);
  const { data: ChannelDetails } = useChannelDetails(channelId);

  useEffect(() => {
    if (queryTitle) {
      setTitle(queryTitle);
      console.log(queryTitle, "queryTitle");
    }
  }, [queryTitle]);
  
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
