import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularNews } from "../../features/news/popularNewsSlice";

function PopularNews() {
  const popularNews = useSelector((state) => {
    return state.popularNews;
  });

  const { isLoading, data, error } = popularNews;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularNews());
  }, []);

  return (
    <div className="pl-2.5">
      <h3 className="text-2xl mb-2">Popular News</h3>

      <div className="popular-news-container">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {data.articles?.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PopularNews;
