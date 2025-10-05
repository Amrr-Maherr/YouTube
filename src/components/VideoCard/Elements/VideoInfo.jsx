// src/components/Video/VideoInfo.jsx
function VideoInfo({ video }) {
  return (
    <div>
      <div className="mt-2">
        <p className="text-[16px] font-medium text-[var(--foreground)] line-clamp-2">
          {video?.snippet?.localized?.title || video.snippet.title}
        </p>
        {video.snippet.channelTitle && (
          <p className="text-[14px] text-[var(--muted-foreground)] mt-1">
            {video.snippet.channelTitle}
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] text-[var(--muted-foreground)] mt-1">
          {Number(video.statistics?.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
}

export default VideoInfo;
