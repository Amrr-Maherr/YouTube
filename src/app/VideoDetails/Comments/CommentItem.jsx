"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/ui/avatar";
import { ThumbsUp, ThumbsDown } from "lucide-react";

function CommentItem({ author, text, avatar, likeCount, totalReplyCount }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex flex-col gap-2 pb-3">
      <div className="flex items-start gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1">{author}</p>
          <p className="text-sm text-gray-700">{text}</p>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
              <ThumbsUp className="h-4 w-4" />
              {likeCount ? likeCount.toLocaleString() : 0}
            </div>
            <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
              <ThumbsDown className="h-4 w-4" />
            </div>
            {totalReplyCount > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-sm text-blue-500"
              >
                {showReplies
                  ? `Hide ${totalReplyCount} replies`
                  : `View ${totalReplyCount} replies`}
              </button>
            )}
          </div>
        </div>
      </div>
      {showReplies && (
        <div className="ml-12 text-sm text-gray-600">Replies go here...</div>
      )}
    </div>
  );
}

export default CommentItem;
