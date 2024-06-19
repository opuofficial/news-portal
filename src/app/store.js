import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "../features/news/latestNewsSlice";
import popularNewsReducer from "../features/news/popularNewsSlice";
import favoriteArticlesReducer from "../features/news/favoriteArticlesSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
    popularNews: popularNewsReducer,
    favoriteArticles: favoriteArticlesReducer,
  },
});

export default store;
