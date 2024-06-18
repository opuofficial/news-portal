import React from "react";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";
import Pagination from "../pagination";

function LatestUpdates() {
  return (
    <div className="pr-2.5">
      <h3 className="text-2xl mb-2">Latest Updates</h3>

      <p className="text-right text-sm text-slate-500 mb-3">
        Showing page 1 of 3
      </p>

      <div className="latest-news-container">
        {/* <CardSkeleton /> */}
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <Pagination />
      </div>
    </div>
  );
}

export default LatestUpdates;
