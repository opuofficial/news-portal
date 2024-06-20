import { configureStore } from "@reduxjs/toolkit";
import newsSliceReducer from "../features/news/newsSlice";
import popularNewsReducer from "../features/news/popularNewsSlice";
import favoriteArticlesReducer from "../features/news/favoriteArticlesSlice";

const store = configureStore({
  reducer: {
    news: newsSliceReducer,
    popularNews: popularNewsReducer,
    favoriteArticles: favoriteArticlesReducer,
  },
});

export default store;
