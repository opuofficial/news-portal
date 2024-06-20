import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestNews, setCurrentPage } from "../../features/news/newsSlice";

function Pagination() {
  const { currentPage, totalPage, selectedCategory } = useSelector((state) => {
    return state.news;
  });

  const dispatch = useDispatch();

  let paginationButtons = [];

  for (let i = 1; i <= totalPage; i++) {
    paginationButtons.push(i);
  }

  const handlePaginationButtonClick = (pageNo) => {
    scrollToTop();
    dispatch(fetchLatestNews({ page: pageNo, category: selectedCategory }));
    dispatch(setCurrentPage(pageNo));
  };

  const handlePrevPageButtonClick = () => {
    scrollToTop();

    if (currentPage > 1) {
      dispatch(
        fetchLatestNews({ page: currentPage - 1, category: selectedCategory })
      );
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPageButtonClick = () => {
    scrollToTop();

    if (currentPage < totalPage) {
      dispatch(
        fetchLatestNews({ page: currentPage + 1, category: selectedCategory })
      );
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 mb-16">
      <div className="flex gap-1">
        <button
          className="border border-slate-200 py-1 px-3 rounded-md"
          onClick={handlePrevPageButtonClick}
          disabled={currentPage == 1}
        >
          Prev
        </button>
        {paginationButtons.map((pageNo) => (
          <button
            className={`border border-slate-200 py-1 px-3 rounded-md ${
              pageNo == currentPage ? "bg-blue-950 text-white" : ""
            }`}
            key={pageNo}
            onClick={() => handlePaginationButtonClick(pageNo)}
          >
            {pageNo}
          </button>
        ))}
        <button
          className="border border-slate-200 py-1 px-3 rounded-md"
          onClick={handleNextPageButtonClick}
          disabled={currentPage == totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
