"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CommentItem({ author, text, avatar }) {
  return (
    <div className="flex items-start gap-3 border-b border-gray-200 pb-3">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar} alt={author} />
        <AvatarFallback>{author?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{author}</p>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default CommentItem;
