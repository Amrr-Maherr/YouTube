import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchVideoDetails = async (videoId) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos`,
    {
      params: {
        part: "snippet,contentDetails,statistics",
        id: videoId,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return response.data.items;
};

export const useVideoDetails = (videoId) => {
  return useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => fetchVideoDetails(videoId),
    enabled: !!videoId,
  });
};
