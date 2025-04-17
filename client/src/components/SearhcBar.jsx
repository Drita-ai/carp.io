import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

function SearchBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex items-center bg-white px-3 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out overflow-hidden
        ${isHovered ? "w-72" : "w-12"}
        ${mounted && !isHovered ? "animate-wiggle" : ""}
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Search className="text-gray-500" />
      {isHovered && (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search people..."
            className="ml-2 bg-transparent outline-none w-full text-sm"
            autoFocus
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full transition"
            onClick={() => alert(`Searching: ${searchTerm}`)}
          >
            Go
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBar;
