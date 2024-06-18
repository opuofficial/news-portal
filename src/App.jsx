import "./App.css";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import NewsSection from "./components/newsSection";
import SearchBox from "./components/searchBox";

function App() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Categories />
      <NewsSection />
    </>
  );
}

export default App;
