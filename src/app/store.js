import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "../features/news/latestNewsSlice";

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
  },
});

export default store;
