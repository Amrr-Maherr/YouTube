function VideoStats({ viewCount, likeCount, commentCount }) {
  return (
    <div className="flex gap-6 text-sm text-gray-600 mb-4">
      <span>👁 {Number(viewCount).toLocaleString()} views</span>
      <span>👍 {Number(likeCount).toLocaleString()} likes</span>
      <span>💬 {Number(commentCount).toLocaleString()} comments</span>
    </div>
  );
}
export default VideoStats;
