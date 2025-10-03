"use client";
import { Card } from "@/components/ui/card";
import VideoDescription from "./VideoDescription";
import VideoStats from "./VideoStats";
import VideoHeader from "./VideoHeader";
import VideoThumbnail from "./VideoThumbnail";
function VideoDetailsCard({ video, id }) {
  if (!video) return null;
  console.log(video);

  const { snippet, statistics } = video;
  const { title, description, channelTitle, thumbnails, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  return (
    <Card className="w-full bg-transparent border-0 py-1 shadow-none">
      <VideoThumbnail thumbnails={thumbnails} title={title} id={id} />
      <VideoHeader
        title={title}
        channelTitle={channelTitle}
        publishedAt={publishedAt}
      />
      <VideoStats
        viewCount={viewCount}
        likeCount={likeCount}
        commentCount={commentCount}
      />
      <VideoDescription description={description} />
    </Card>
  );
}

export default VideoDetailsCard;
