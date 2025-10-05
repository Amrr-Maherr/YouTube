import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SearchResultSkeleton() {
  return (
    <div className="absolute top-10 w-full bg-[var(--background)] border border-[#303030] rounded-md shadow-lg overflow-y-auto overflow-x-hidden max-h-[400px] z-50 p-3 space-y-3">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-2 rounded-md"
          >
            <Skeleton
              height={48}
              width={64}
              borderRadius={8}
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
                width="70%"
                className="mt-2"
                baseColor="var(--background)"
                highlightColor="var(--foreground)"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchResultSkeleton;
