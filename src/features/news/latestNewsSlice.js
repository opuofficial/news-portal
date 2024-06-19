import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchLatestNews = createAsyncThunk(
  "latestNews/fetchLatestNews",
  async ({ page, category }) => {
    let endpoint = `/top-headlines?country=in&page=${page}`;

    if (category && category != "all") {
      endpoint += `&category=${category}`;
    }

    const res = await axiosInstance.get(endpoint);
    return res.data;
  }
);

export const fetchByCategory = createAsyncThunk(
  "latestNews/fetchByCategory",
  async ({ category, page }) => {
    let endpoint = `/top-headlines?country=in&page=${page}`;

    if (category && category != "all") {
      endpoint += `&category=${category}`;
    }

    const res = await axiosInstance.get(endpoint);
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
    categories: [
      "business",
      "entertainment",
      "general",
      "science",
      "sports",
      "technology",
    ],
    selectedCategory: "all",
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
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

    builder.addCase(fetchByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.totalResults = state.data.totalResults;
      state.totalPage = Math.ceil(state.totalResults / state.articlesPerPage);
      state.error = null;
    });
    builder.addCase(fetchByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default latestNewsSlice.reducer;
export const { setCurrentPage, selectCategory } = latestNewsSlice.actions;
