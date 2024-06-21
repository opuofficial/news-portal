import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchByCategory,
  selectCategory,
  setCurrentPage,
} from "../../features/news/newsSlice";

function Categories() {
  const { categories, selectedCategory } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    if (category == selectedCategory) {
      return;
    }

    dispatch(selectCategory(category));
    dispatch(setCurrentPage(1));
    dispatch(fetchByCategory({ category, page: 1 }));
  };

  return (
    <div className="container px-4 max-w-3xl m-auto mt-3 mb-5">
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <button
            className={`px-3 py-1 rounded-md ${
              selectedCategory == category
                ? "bg-blue-950 text-white font-semibold"
                : ""
            }`}
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
