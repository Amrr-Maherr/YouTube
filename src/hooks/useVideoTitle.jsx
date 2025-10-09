"use client";

import { useEffect } from "react";

export default function useVideoTitle(videoDetails) {
  useEffect(() => {
    if (videoDetails?.length > 0) {
      document.title = `${videoDetails[0].snippet.title} - My Awesome Website`;
    } else {
      document.title = "My Awesome Website";
    }
  }, [videoDetails]);
}
