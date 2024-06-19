import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "../features/news/latestNewsSlice";
import popularNewsReducer from "../features/news/popularNewsSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
    popularNews: popularNewsReducer,
  },
});

export default store;
