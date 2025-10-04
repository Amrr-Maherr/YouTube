"use client";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, Bookmark } from "lucide-react";

function VideoStats({ viewCount, likeCount, commentCount }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          className="flex items-center gap-2 rounded-full px-4 py-2"
        >
          <ThumbsUp className="h-5 w-5" />
          {Number(likeCount).toLocaleString()}
        </Button>
        <Button
          variant="secondary"
          className="flex items-center gap-2 rounded-full px-4 py-2"
        >
          <ThumbsDown className="h-5 w-5" />
        </Button>
        <Button
          variant="secondary"
          className="flex items-center gap-2 rounded-full px-4 py-2"
        >
          <Share2 className="h-5 w-5" />
          Share
        </Button>
        <Button
          variant="secondary"
          className="flex items-center gap-2 rounded-full px-4 py-2"
        >
          <Bookmark className="h-5 w-5" />
          Save
        </Button>
      </div>
    </div>
  );
}

export default VideoStats;
