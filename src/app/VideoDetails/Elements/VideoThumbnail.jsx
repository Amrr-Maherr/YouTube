function VideoThumbnail({ id, title }) {
  return (
    <div className="w-full mb-2 aspect-video">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default VideoThumbnail;
