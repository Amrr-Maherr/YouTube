"use client";
import CommentItem from "./CommentItem";

function VideoComments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="text-gray-500 text-sm">No comments yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          author={comment.author}
          text={comment.text}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
}

export default VideoComments;
