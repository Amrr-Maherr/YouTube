"use client";
import { useState } from "react";
import CommentItem from "./CommentItem";

function VideoComments({ comments }) {
  const [showAll, setShowAll] = useState(false);

  if (!comments || !comments.items || comments.items.length === 0) {
    return <p className="text-gray-500 text-sm">No comments yet.</p>;
  }

  const commentsToShow = showAll ? comments.items : comments.items.slice(0, 10);

  return (
    <div className="mt-6 space-y-4">
      {commentsToShow.map((commentData) => {
        const snippet = commentData.snippet.topLevelComment.snippet;
        return (
          <CommentItem
            key={commentData.id}
            author={snippet.authorDisplayName}
            text={snippet.textDisplay}
            avatar={snippet.authorProfileImageUrl}
            likeCount={snippet.likeCount}
            totalReplyCount={commentData.snippet.totalReplyCount}
          />
        );
      })}
      {comments.items.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-blue-500 hover:underline"
        >
          {showAll ? "Show Less" : "Show All Comments"}
        </button>
      )}
    </div>
  );
}

export default VideoComments;
