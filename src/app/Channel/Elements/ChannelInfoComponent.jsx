export default function ChannelInfoComponent({
  thumbnail,
  title,
  customUrl,
  subscriberCount,
  videoCount,
  viewCount,
}) {
  return (
    <div className="mx-auto px-4 mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
      {thumbnail && (
        <div className="order-1 md:order-1 relative w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md overflow-hidden">
          <img
            src={thumbnail}
            alt="Channel Thumbnail"
            className="object-cover"
          />
        </div>
      )}
      <div className="order-2 md:order-2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl font-bold">{title}</h1>
        {customUrl && (
          <span className="text-gray-500 text-sm">{customUrl}</span>
        )}
        <div className="text-gray-600 text-sm flex flex-wrap gap-2 mt-1 justify-center md:justify-start">
          {subscriberCount && <span>{subscriberCount} subscribers</span>}
          {videoCount && <span>{videoCount} videos</span>}
          {viewCount && <span>{viewCount} views</span>}
        </div>
      </div>
    </div>
  );
}
