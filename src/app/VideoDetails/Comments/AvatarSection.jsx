"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarSection({ avatar, author }) {
  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src={avatar} alt={author} />
      <AvatarFallback>{author?.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}

export default AvatarSection;
