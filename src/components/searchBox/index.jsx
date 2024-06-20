import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="container px-4 max-w-3xl m-auto mt-5">
      <div className="flex border border-slate-200 rounded-md p-2">
        <input
          type="text"
          className=" p-2 
        rounded-md 
        outline-none w-full"
          placeholder="Looking for Something?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-950
         text-white 
         font-semibold 
         py-1 
         px-5 
         rounded-md"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
