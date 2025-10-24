"use client";

import { useEffect } from "react";

export default function useVideoTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "YouTube";
    }
  }, [title]);
}
