import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchChannelDetails = async (channelId) => {
  const channelRes = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "snippet,statistics,brandingSettings,contentDetails",
        id: channelId,
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );

  return channelRes.data.items;
};

export const useChannelDetails = (channelId) => {
  return useQuery({
    queryKey: ["channelDetails", channelId],
    queryFn: () => fetchChannelDetails(channelId),
    enabled: !!channelId,
  });
};
