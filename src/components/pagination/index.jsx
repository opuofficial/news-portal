import React from "react";

function Pagination() {
  return (
    <div className="mt-5 mb-16">
      <div className="flex gap-1">
        <button className="border border-slate-200 py-1 px-3 rounded-md">
          Prev
        </button>
        <button className="border border-slate-200 py-1 px-3 rounded-md bg-blue-500 text-white">
          1
        </button>
        <button className="border border-slate-200 py-1 px-3 rounded-md">
          2
        </button>
        <button className="border border-slate-200 py-1 px-3 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
