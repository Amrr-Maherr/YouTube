"use client";

import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
const SearchBar = () => {
  const [SearchQuery, setSearchQuery] = useState(null)
  useEffect(() => {
    console.log(SearchQuery);
  }, [SearchQuery])
  console.log(SearchQuery);
  return (
    <div className="flex-grow max-w-[500px] mx-4 relative">
      <form className="relative">
        {SearchQuery && (
          <X
            onClick={() => {
              setSearchQuery("");
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#aaaaaa] cursor-pointer hover:text-[var(--foreground)]"
            size={18}
          />
        )}
        <Input
          value={SearchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className={`w-full pl-10 ${
            SearchQuery ? "pr-10" : ""
          }  py-2 bg-[var(--background)] rounded-full border border-[#303030] text-[var(--foreground)] focus:ring-2 focus:ring-[#1a73e8] font-roboto text-[16px] placeholder-[#aaaaaa] text-right`}
        />
        <Search
          className="absolute left-3 top-1/2 cursor-pointer transform -translate-y-1/2 text-[#aaaaaa]
          hover:text-[var(--foreground)]"
          size={20}
        />
      </form>
    </div>
  );
};

export default SearchBar;
