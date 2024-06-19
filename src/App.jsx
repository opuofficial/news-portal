import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LatestUpdates from "./components/latestUpdates";
import FavoriteNews from "./components/favoriteNews";
import SearchResult from "./components/searchResult";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import favoriteArticles from "./favoriteArticles";
import { setFavoriteArticles } from "./features/news/favoriteArticlesSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LatestUpdates />,
      },
      {
        path: "favorite",
        element: <FavoriteNews />,
      },
      {
        path: "search",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  const retriveFavoriteArticles = async () => {
    const data = await favoriteArticles.getAllArticles();
    console.log(data);
    const urls = data.map((article) => article.url);
    dispatch(setFavoriteArticles(urls));
  };

  useEffect(() => {
    retriveFavoriteArticles();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
