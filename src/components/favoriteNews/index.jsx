import React, { useEffect, useState } from "react";
import NewsCard from "../latestUpdates/NewsCard";
import favoriteArticles from "../../favoriteArticles";

function FavoriteNews() {
  const [articles, setArticles] = useState([]);

  const getFavoriteArticles = async () => {
    const results = await favoriteArticles.getAllArticles();
    setArticles(results);
  };

  useEffect(() => {
    getFavoriteArticles();
  }, []);

  return (
    <div className="pr-2.5">
      <h3 className="text-2xl mb-2">Your Favorite</h3>

      <div className="favorite-news-container">
        {/* <CardSkeleton /> */}
        {/* <NewsCard /> */}
        {articles.map((article) => (
          <NewsCard article={article} key={article.url} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteNews;
