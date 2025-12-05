import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPlaylistItems = async (playlistId) => {
  const res = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet,contentDetails",
        playlistId: playlistId,
        maxResults: 20,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return res.data.items;
};

export const usePlaylistItems = (playlistId) => {
  return useQuery({
    queryKey: ["playlistItems", playlistId],
    queryFn: () => fetchPlaylistItems(playlistId),
    enabled: !!playlistId,
  });
};
