import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SearchResultCardLoader() {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] mb-4">
      <Skeleton
        height={200}
        borderRadius={8}
        baseColor="var(--background)"
        highlightColor="var(--foreground)"
      />
      <div className="flex mt-3 space-x-3">
        <Skeleton
          circle
          width={40}
          height={40}
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
        <div className="flex-1">
          <Skeleton
            height={16}
            width="90%"
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
          <Skeleton
            height={14}
            width="60%"
            className="mt-2"
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
        </div>
      </div>
    </div>
  );
}
export function VideoSkeletonList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <SearchResultCardLoader key={i} />
      ))}
    </div>
  );
}

export default SearchResultCardLoader;
