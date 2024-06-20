import React from "react";
import LatestUpdates from "../latestUpdates";
import PopularNews from "../popularNews";
import Pagination from "../pagination";
import { Outlet } from "react-router-dom";
import Categories from "../categories";

function NewsSection() {
  return (
    <div className="container px-4 max-w-3xl m-auto mt-4">
      <div className="md:grid grid-cols-5">
        <div className="md:col-span-3">
          <Outlet />
        </div>
        <div className="md:col-span-2">
          <PopularNews />
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
