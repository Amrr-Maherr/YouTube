// src/components/Video/VideoActions.jsx
import { Clock3, Heart, Share2, UserPlus } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState } from "react";

function VideoActions({ video }) {
  const [likedVideos, , { addItem: addToLiked, removeItem: removeFromLiked, isInStorage: isLiked }] = useLocalStorage("likedVideos", []);
  const [watchLater, , { addItem: addToWatchLater, removeItem: removeFromWatchLater, isInStorage: isInWatchLater }] = useLocalStorage("watchLater", []);
  const [subscriptions, , { addItem: addToSubscriptions }] = useLocalStorage("subscriptions", []);
  const [watchHistory, setWatchHistory] = useLocalStorage("watchHistory", []);

  const [showActions, setShowActions] = useState(false);

  // Extract video ID with fallback for different data structures
  const videoId = video.id?.videoId ||
                 video.id ||
                 video.videoId ||
                 video.snippet?.resourceId?.videoId;

  // Extract channel info with fallbacks
  const channelData = {
    id: video.snippet?.channelId || video.channelId,
    title: video.snippet?.channelTitle || video.channelTitle,
    thumbnail: video.snippet?.thumbnails?.default?.url || video.thumbnail
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Use existing data or build from video object
    const videoData = {
      id: videoId,
      title: video.title || video.snippet?.title || 'Untitled Video',
      thumbnail: video.thumbnail || video.snippet?.thumbnails?.default?.url,
      channelTitle: video.channelTitle || video.snippet?.channelTitle || 'Unknown Channel',
      publishedAt: video.publishedAt || video.snippet?.publishedAt
    };

    if (isLiked(videoId)) {
      removeFromLiked(videoId);
    } else {
      addToLiked(videoData);
    }
  };

  const handleWatchLater = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Use existing data or build from video object
    const videoData = {
      id: videoId,
      title: video.title || video.snippet?.title || 'Untitled Video',
      thumbnail: video.thumbnail || video.snippet?.thumbnails?.default?.url,
      channelTitle: video.channelTitle || video.snippet?.channelTitle || 'Unknown Channel',
      savedAt: Date.now()
    };

    if (isInWatchLater(videoId)) {
      removeFromWatchLater(videoId);
    } else {
      addToWatchLater(videoData);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToSubscriptions({
      ...channelData,
      subscribedAt: Date.now()
    });
  };

  const handleWatch = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const watchData = {
      id: videoId,
      title: video.snippet?.title,
      thumbnail: video.snippet?.thumbnails?.default?.url,
      channelTitle: video.snippet?.channelTitle,
      watchedAt: Date.now()
    };

    // Add to history
    const existingIndex = watchHistory.findIndex(v => v.id === videoId);
    if (existingIndex === -1) {
      setWatchHistory([watchData, ...watchHistory]);
    }
  };

  return (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {/* Main actions menu */}
      <div className="flex gap-1">
        {/* Watch Later Button */}
        <button
          onClick={handleWatchLater}
          className={`p-2 rounded-full transition-colors ${
            isInWatchLater(videoId)
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-black bg-opacity-70 hover:bg-opacity-90'
          }`}
          title={isInWatchLater(videoId) ? "Remove from Watch Later" : "Add to Watch Later"}
        >
          <Clock3 className="w-4 h-4 text-white" />
        </button>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`p-2 rounded-full transition-colors ${
            isLiked(videoId)
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-black bg-opacity-70 hover:bg-opacity-90'
          }`}
          title={isLiked(videoId) ? "Unlike" : "Like"}
        >
          <Heart className={`w-4 h-4 ${isLiked(videoId) ? 'text-white fill-current' : 'text-white'}`} />
        </button>

        {/* Subscribe Button - Only if not already subscribed */}
        {!subscriptions.some(s => s.id === channelData.id) && (
          <button
            onClick={handleSubscribe}
            className="p-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-colors"
            title="Subscribe to channel"
          >
            <UserPlus className="w-4 h-4 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoActions;
