function SearchResultMenu({ SearchResult }) {
    console.log(SearchResult, "SearchResult");
    
  return (
    <div className="absolute top-10 w-full  bg-[var(--background)] border border-[#303030] rounded-md shadow-lg overflow-y-auto overflow-x-hidden max-h-[400px] z-50">
      {SearchResult.length === 0 ? (
        <p className="p-4 text-center text-[var(--foreground)]">
          No results found
        </p>
      ) : (
        SearchResult.map((ele) => (
          <div
            key={ele.id.videoId}
            className="flex items-center px-4 py-3 cursor-pointer hover:text-[var(--foreground)] transition-colors"
          >
            <img
              src={ele.snippet.thumbnails.default.url}
              alt={ele.snippet.title}
              className="w-12 h-12 rounded-md mr-4"
            />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-[var(--foreground)] line-clamp-2">
                {ele.snippet.title}
              </p>
              <p className="text-xs text-[var(--foreground)]">
                {ele.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResultMenu;
