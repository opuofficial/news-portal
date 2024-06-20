import React, { useEffect } from "react";
import CardSkeleton from "../newsCard/CardSkeleton";
import Pagination from "../pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestNews } from "../../features/news/newsSlice";
import NewsCard from "../newsCard";
import Categories from "../categories";

function LatestUpdates() {
  const news = useSelector((state) => {
    return state.news;
  });

  const { isLoading, data, error, currentPage, totalPage } = news;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestNews({ page: 1, category: "all" }));
  }, []);

  return (
    <>
      <Categories />

      <div className="pr-2.5">
        <h3 className="text-2xl mb-2">Latest Updates</h3>

        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <p className="text-right text-sm text-slate-500 mb-3">
              Showing page {currentPage} of {totalPage}
            </p>

            <div className="latest-news-container">
              {data.articles?.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}

              <Pagination />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LatestUpdates;
