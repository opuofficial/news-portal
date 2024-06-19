import { createSlice } from "@reduxjs/toolkit";
import favoriteArticles from "../../favoriteArticles";

const favoriteArticlesSlice = createSlice({
  name: "favoriteArticles",
  initialState: {
    articlesUrl: [],
  },
  reducers: {
    setFavoriteArticles: (state, action) => {
      state.articlesUrl = action.payload;
    },
    addArticleUrl: (state, action) => {
      state.articlesUrl.push(action.payload);
    },
    removeArticleUrl: (state, action) => {
      state.articlesUrl = state.articlesUrl.filter((url) => {
        return url != action.payload;
      });
    },
  },
});

export default favoriteArticlesSlice.reducer;
export const { setFavoriteArticles, addArticleUrl, removeArticleUrl } =
  favoriteArticlesSlice.actions;
