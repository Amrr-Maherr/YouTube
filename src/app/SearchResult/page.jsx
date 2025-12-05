"use client";
import { useSearchParams } from "next/navigation";
import { useSearchVideos } from "@/hooks/useSearchVideos";
import SearchResultCard from "./Elements/SearchResultCard";
import SearchResultCardLoader from "@/components/LoadingSkeleton/SearchResultCardLoader";

function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { data: SearchResult, isLoading: loading } = useSearchVideos(query);

  if (loading) {
    return <SearchResultCardLoader />;
  }

  return (
    <section className="container mx-auto">
      {SearchResult?.map((video) => (
        <SearchResultCard video={video} key={video.id.videoId} />
      ))}
    </section>
  );
}

export default Page;
