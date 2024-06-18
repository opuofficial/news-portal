import React from "react";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";

function PopularNews() {
  return (
    <div className="md:col-span-2 pl-2.5">
      <h3 className="text-2xl mb-2">Popular News</h3>

      <div className="popular-news-container">
        {/* <CardSkeleton /> */}
        <NewsCard />
      </div>
    </div>
  );
}

export default PopularNews;
