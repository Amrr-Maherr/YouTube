import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function VideoSkeleton() {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] mb-4">
      <Skeleton height={200} borderRadius={8} />
      <div className="flex mt-3 space-x-3">
        <Skeleton circle width={40} height={40} />
        <div className="flex-1">
          <Skeleton height={16} width="90%" />
          <Skeleton height={14} width="60%" className="mt-2" />
        </div>
      </div>
    </div>
  );
}

export function VideoSkeletonList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <VideoSkeleton key={i} />
      ))}
    </div>
  );
}
