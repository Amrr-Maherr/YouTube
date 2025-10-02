import React from "react";

function VideoThumbnail({ url, title }) {
  return (
    <img
      src={url}
      alt={title}
      className="w-full h-30 md:w-100 md:h-60 object-cover rounded-md mr-4"
    />
  );
}

export default VideoThumbnail;
