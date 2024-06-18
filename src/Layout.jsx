import React from "react";
import Navbar from "./components/navbar";
import SearchBox from "./components/searchBox";
import Categories from "./components/categories";
import NewsSection from "./components/newsSection";
import Footer from "./components/footer";

function Layout() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Categories />
      <NewsSection />
      <Footer />
    </>
  );
}

export default Layout;
