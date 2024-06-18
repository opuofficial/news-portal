import React from "react";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";
import Pagination from "../pagination";

function LatestUpdates() {
  return (
    <div className="md:col-span-3 pr-2.5">
      <h3 className="text-2xl mb-2">Latest Updates</h3>

      <p className="text-right text-sm text-slate-500">Showing page 1 of 3</p>

      <div className="latest-news-container">
        {/* <CardSkeleton /> */}
        <NewsCard />
        <Pagination />
      </div>
    </div>
  );
}

export default LatestUpdates;
