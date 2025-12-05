import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function VideoDetailsSkeleton() {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] p-4 container">
      <Skeleton
        height={400}
        borderRadius={8}
        baseColor="var(--background)"
        highlightColor="var(--foreground)"
      />

      <div className="mt-4">
        <Skeleton
          height={24}
          width="80%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
        <Skeleton
          height={20}
          width="60%"
          className="mt-2"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-3">
          <Skeleton
            circle
            width={48}
            height={48}
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
          <div>
            <Skeleton
              height={16}
              width={120}
              baseColor="var(--background)"
              highlightColor="var(--foreground)"
            />
            <Skeleton
              height={14}
              width={80}
              className="mt-1"
              baseColor="var(--background)"
              highlightColor="var(--foreground)"
            />
          </div>
        </div>
        <Skeleton
          height={36}
          width={100}
          borderRadius={20}
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
      </div>
      <div className="mt-6 space-y-2">
        <Skeleton
          height={14}
          width="95%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
        <Skeleton
          height={14}
          width="90%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
        <Skeleton
          height={14}
          width="85%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
      </div>
    </div>
  );
}

export default VideoDetailsSkeleton;
