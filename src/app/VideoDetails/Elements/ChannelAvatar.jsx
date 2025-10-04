"use client";
import Image from "next/image";

function ChannelAvatar({channelTitle, ChannelDetails }) {
  if (!ChannelDetails) return null;

  return (
    <div className="flex items-center gap-3 py-2">
      <img
        src={ChannelDetails[0].snippet.thumbnails.high.url}
        alt={channelTitle}
        width={48}
        height={48}
        className="rounded-full border"
      />
    </div>
  );
}

export default ChannelAvatar;
