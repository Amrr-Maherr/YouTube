import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSearchVideos = async (query) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        maxResults: 50,
        q: query,
        type: "video",
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return response.data.items;
};

export const useSearchVideos = (query) => {
  return useQuery({
    queryKey: ["searchVideos", query],
    queryFn: () => fetchSearchVideos(query),
    enabled: !!query,
  });
};
