"use client";
import Image from "next/image";

function ChannelAvatar({ channelImage, channelTitle }) {
  if (!channelImage) return null;

  return (
    <div className="flex items-center gap-3 py-2">
      <img
        src={channelImage}
        alt={channelTitle}
        width={48}
        height={48}
        className="rounded-full border"
      />
    </div>
  );
}

export default ChannelAvatar;
