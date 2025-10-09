"use client";
import { Card } from "@/components/ui/card";
import VideoDescription from "./VideoDescription";
import VideoStats from "./VideoStats";
import VideoHeader from "./VideoHeader";
import VideoThumbnail from "./VideoThumbnail";
import CommentInput from "../Comments/CommentInput";
import Link from "next/link";
import { useEffect } from "react";
import VideoCommentsHeader from "./VideoCommentsHeader";

function VideoDetailsCard({ video, id, ChannelDetails }) {
  if (!video) return null;
  const { snippet, statistics } = video;
  const { title, description, channelTitle, thumbnails, publishedAt, tags } =
    snippet;
  const { viewCount, likeCount, commentCount } = statistics;
  console.log(snippet, "video");
  const ChannelId = ChannelDetails?.[0]?.id;
  
  return (
    <Card className="w-full bg-transparent border-0 py-1 shadow-none">
      <Link href={`/Channel/${ChannelId}`}>
        <VideoThumbnail thumbnails={thumbnails} title={title} id={id} />
        <VideoHeader
          title={title}
          channelTitle={channelTitle}
          publishedAt={publishedAt}
          ChannelDetails={ChannelDetails}
          viewCount={viewCount}
        />
      </Link>
      <VideoStats viewCount={viewCount} likeCount={likeCount} />
      <VideoDescription description={description} tags={tags} />
      <VideoCommentsHeader commentCount={commentCount} />
      <CommentInput />
    </Card>
  );
}

export default VideoDetailsCard;
