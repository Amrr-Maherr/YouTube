import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMostPopularVideos = async ({ pageParam = "", country = "EG" }) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos",
    {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: country,
        maxResults: 10,
        pageToken: pageParam,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return response.data;
};

export const useMostPopularVideos = ({ country = "EG" }) => {
  return useInfiniteQuery({
    queryKey: ["mostPopularVideos", country],
    queryFn: fetchMostPopularVideos,
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};
