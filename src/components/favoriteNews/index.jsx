import React from "react";
import NewsCard from "../latestUpdates/NewsCard";

function FavoriteNews() {
  return (
    <div className="pr-2.5">
      <h3 className="text-2xl mb-2">Your Favorite</h3>

      <div className="favorite-news-container">
        {/* <CardSkeleton /> */}
        <NewsCard />
      </div>
    </div>
  );
}

export default FavoriteNews;
