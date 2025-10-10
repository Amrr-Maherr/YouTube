import { memo } from "react";
import PlaylistVideoCard from "./PlaylistVideoCard";

function ChannelPlayLists({ ChannelPlayList }) {
  if (!ChannelPlayList || ChannelPlayList.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Playlists
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ChannelPlayList.map((video) => (
          <PlaylistVideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default memo(ChannelPlayLists);
