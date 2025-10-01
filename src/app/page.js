"use client"
import Image from "next/image";
import { FetchMostPopularVideos } from "@/Store/MostPopularVideosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoSkeletonList } from "@/components/LoadingSkeleton/VideoSkeleton";
export default function Home() {
  const Videos = useSelector((state) => state.MostPopularVideos.data);
  const error = useSelector((state) => state.MostPopularVideos.error);
  const loading = useSelector((state) => state.MostPopularVideos.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMostPopularVideos());
  }, [dispatch]);
  console.log(Videos);
  console.log(error);
  console.log(loading);
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Hello Theme</h1>
    </main>
  );
}
