"use client"
import { useSelector } from "react-redux";
import SearchResultCard from "./Elements/SearchResultCard";
import SearchResultCardLoader from "@/components/LoadingSkeleton/SearchResultCardLoader";
function page() {
    const SearchResult = useSelector((state) => state.SearchVideos.data);
    const loading = useSelector((state) => state.SearchVideos.loading);
  if (loading) {
    return (
        <SearchResultCardLoader/>
      )
    }
    return (
      <section className="container mx-auto">
        {SearchResult.map((video) => (
          <SearchResultCard video={video} key={video.id.videoId} />
        ))}
      </section>
    );
}

export default page
