"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// ================= Banner Skeleton =================
function BannerSkeleton() {
  return (
    <div className="w-full h-48 md:h-64 relative bg-gray-200">
      <Skeleton
        height="100%"
        width="100%"
        borderRadius={8}
        baseColor="var(--background)"
        highlightColor="var(--foreground)"
      />
    </div>
  );
}

// ================= Channel Info Skeleton =================
function ChannelInfoSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-6 flex flex-col md:flex-row gap-4">
      {/* Thumbnail */}
      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
        <Skeleton
          circle
          width="100%"
          height="100%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
      </div>

      <div className="flex flex-col justify-center flex-1">
        <Skeleton
          height={24}
          width="60%"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />
        <Skeleton
          height={16}
          width="40%"
          className="mt-2"
          baseColor="var(--background)"
          highlightColor="var(--foreground)"
        />

        <div className="flex flex-wrap gap-2 mt-2">
          <Skeleton
            height={14}
            width={100}
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
          <Skeleton
            height={14}
            width={80}
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
          <Skeleton
            height={14}
            width={90}
            baseColor="var(--background)"
            highlightColor="var(--foreground)"
          />
        </div>
      </div>
    </div>
  );
}

// ================= Channel Description Skeleton =================
function ChannelDescriptionSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-6">
      <Skeleton
        height={20}
        width="30%"
        baseColor="var(--background)"
        highlightColor="var(--foreground)"
      />
      <div className="mt-2 space-y-2">
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

// ================= Channel Page Skeleton (Wrapper) =================
export default function ChannelPageSkeleton() {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)] p-4 container">
      <BannerSkeleton />
      <ChannelInfoSkeleton />
      <ChannelDescriptionSkeleton />
    </div>
  );
}
