import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchPopularNews = createAsyncThunk(
  "latestNews/fetchPopularNews",
  async () => {
    const res = await axiosInstance.get(
      "/popular-headlines?language=en&sortBy=popularity&q=technology"
    );
    return res.data;
  }
);

const popularNewsSlice = createSlice({
  name: "popularNews",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopularNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPopularNews.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default popularNewsSlice.reducer;
