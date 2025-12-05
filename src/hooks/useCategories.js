import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = async () => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videoCategories",
    {
      params: {
        part: "snippet",
        regionCode: "EG",
        key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
      },
    }
  );
  return response.data.items;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
