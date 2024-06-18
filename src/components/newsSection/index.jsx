import React from "react";
import LatestUpdates from "../latestUpdates";
import PopularNews from "../popularNews";
import Pagination from "../pagination";

function NewsSection() {
  return (
    <div className="container px-4 max-w-3xl m-auto mt-4">
      <div className="md:grid grid-cols-5">
        <LatestUpdates />
        <PopularNews />
      </div>
    </div>
  );
}

export default NewsSection;
