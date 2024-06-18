import React from "react";

function Categories() {
  return (
    <div className="container px-4 max-w-3xl m-auto mt-3">
      <div className="flex gap-3">
        <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md">
          All
        </button>
        <button className="px-3 py-1 rounded-md">Business</button>
        <button className="px-3 py-1 rounded-md">Technology</button>
        <button className="px-3 py-1 rounded-md">Sports</button>
      </div>
    </div>
  );
}

export default Categories;
