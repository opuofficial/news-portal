import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchLatestNews = createAsyncThunk(
  "latestNews/fetchLatestNews",
  async () => {
    const res = await axiosInstance.get("/top-headlines");
    return res.data;
  }
);

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLatestNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLatestNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
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
