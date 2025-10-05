function VideoTags({ tags }) {
    return (
      tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-blue-400 hover:text-blue-500 cursor-pointer text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )
  );
}

export default VideoTags