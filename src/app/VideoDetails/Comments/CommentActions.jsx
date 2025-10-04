"use client";
import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

function CommentActions({ likeCount, totalReplyCount }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex items-center gap-4 mt-1 text-gray-500 text-xs">
      <div className="flex items-center gap-1 cursor-pointer">
        <ThumbsUp className="h-4 w-4" />
        {likeCount ? likeCount.toLocaleString() : 0}
      </div>
      <div className="flex items-center gap-1 cursor-pointer">
        <ThumbsDown className="h-4 w-4" />
      </div>
      {totalReplyCount > 0 && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="text-blue-500 hover:underline text-xs"
        >
          {showReplies
            ? `Hide ${totalReplyCount} replies`
            : `View ${totalReplyCount} replies`}
        </button>
      )}
      {showReplies && (
        <div className="ml-12 mt-2 text-sm text-gray-600">
          Replies go here...
        </div>
      )}
    </div>
  );
}

export default CommentActions;
