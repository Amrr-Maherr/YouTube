"use client";
import React from "react";
import SearchResultClient from "./SearchResultClient";

function Page() {
  return (
    <React.Suspense fallback={<div>Loading search results...</div>}>
      <SearchResultClient />
    </React.Suspense>
  );
}

export default Page;
