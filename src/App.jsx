import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LatestUpdates from "./components/latestUpdates";
import FavoriteNews from "./components/favoriteNews";
import SearchResult from "./components/searchResult";

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
