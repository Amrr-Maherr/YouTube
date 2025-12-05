import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRelatedVideos = async (query) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        maxResults: 10,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return response.data.items;
};

export const useRelatedVideos = (query) => {
  return useQuery({
    queryKey: ["relatedVideos", query],
    queryFn: () => fetchRelatedVideos(query),
    enabled: !!query,
  });
};
