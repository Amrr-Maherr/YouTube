import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchChannelVideos = async (uploadsPlaylistId) => {
  const videosRes = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: 20,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return videosRes.data.items;
};

export const useChannelVideos = (uploadsPlaylistId) => {
  return useQuery({
    queryKey: ["channelVideos", uploadsPlaylistId],
    queryFn: () => fetchChannelVideos(uploadsPlaylistId),
    enabled: !!uploadsPlaylistId,
  });
};
