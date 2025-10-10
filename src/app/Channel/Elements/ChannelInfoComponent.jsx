import Image from "next/image";

export default function ChannelInfoComponent({
  thumbnail,
  title,
  customUrl,
  subscriberCount,
  videoCount,
  viewCount,
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-6 flex flex-col md:flex-row gap-4">
      {thumbnail && (
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
          <img
            src={thumbnail}
            alt="Channel Thumbnail"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {customUrl && (
          <span className="text-gray-500 text-sm">{customUrl}</span>
        )}
        <div className="text-gray-600 text-sm flex flex-wrap gap-2 mt-1">
          {subscriberCount && <span>{subscriberCount} subscribers</span>}
          {videoCount && <span>{videoCount} videos</span>}
          {viewCount && <span>{viewCount} views</span>}
        </div>
      </div>
    </div>
  );
}
