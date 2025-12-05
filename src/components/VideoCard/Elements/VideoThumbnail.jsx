// src/components/Video/VideoThumbnail.jsx

function VideoThumbnail({ video }) {
  // Handle different data structures from localStorage
  const thumbnailUrl = video.thumbnail ||
                      video.thumbnails?.default?.url ||
                      video.snippet?.thumbnails?.high?.url ||
                      video.snippet?.thumbnails?.medium?.url ||
                      video.snippet?.thumbnails?.default?.url;

  const title = video.title || video.snippet?.title || 'Video';

  if (!thumbnailUrl) {
    return (
      <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-700 flex items-center justify-center">
        <div className="text-gray-400 text-sm">No thumbnail</div>
      </div>
    );
  }

  return (
    <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-gray-800">
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.src = '/placeholder-video.png'; // fallback image
        }}
      />
    </div>
  );
}

export default VideoThumbnail;
