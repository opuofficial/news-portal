import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchLatestNews = createAsyncThunk(
  "latestNews/fetchLatestNews",
  async () => {
    const res = await axiosInstance.get("/top-headlines?country=in");
    return res.data;
  }
);

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState: {
    currentPage: 1,
    articlesPerPage: 10,
    totalResults: null,
    totalPage: null,
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatestNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLatestNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.totalResults = state.data.totalResults;
      state.totalPage = Math.ceil(state.totalResults / state.articlesPerPage);
      state.error = null;
    });
    builder.addCase(fetchLatestNews.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default latestNewsSlice.reducer;
