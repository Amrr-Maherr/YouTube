// src/components/Video/VideoInfo.jsx
function VideoInfo({ video }) {
  // Handle different data structures from localStorage
  const title = video.title ||
                video.snippet?.localized?.title ||
                video.snippet?.title ||
                'Untitled Video';

  const channelTitle = video.channelTitle ||
                      video.snippet?.channelTitle ||
                      'Unknown Channel';

  const viewCount = video.viewCount ||
                   video.statistics?.viewCount;

  return (
    <div>
      <div className="mt-2">
        <p className="text-[16px] font-medium text-[var(--foreground)] line-clamp-2">
          {title}
        </p>
        <p className="text-[14px] text-[var(--muted-foreground)] mt-1">
          {channelTitle}
        </p>
      </div>
      {viewCount && (
        <div>
          <p className="text-[14px] text-[var(--muted-foreground)] mt-1">
            {Number(viewCount).toLocaleString()} views
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoInfo;
