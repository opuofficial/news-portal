import React, { useEffect } from "react";
import CardSkeleton from "../newsCard/CardSkeleton";
import { useLocation } from "react-router-dom";
import { fetchBySearchQuery } from "../../features/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../newsCard";
import Pagination from "../pagination";

function SearchResult() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const news = useSelector((state) => {
    return state.news;
  });
  const dispatch = useDispatch();
  const { isLoading, data, error, currentPage, totalPage } = news;

  useEffect(() => {
    dispatch(fetchBySearchQuery({ query, page: currentPage }));
  }, []);

  return (
    <div className="pr-2.5">
      <h3 className="text-2xl mb-2">Search Result</h3>

      <div className="search-result-container">
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
    </div>
  );
}

export default SearchResult;
