import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchVideoComments = async (videoId) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/commentThreads",
    {
      params: {
        part: "snippet",
        videoId: videoId,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
        maxResults: 100,
        order: "relevance",
      },
    }
  );
  return response.data;
};

export const useVideoComments = (videoId) => {
  return useQuery({
    queryKey: ["videoComments", videoId],
    queryFn: () => fetchVideoComments(videoId),
    enabled: !!videoId,
  });
};
