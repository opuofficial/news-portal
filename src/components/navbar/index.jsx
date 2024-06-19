import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container px-4 max-w-3xl m-auto flex justify-between items-center py-5">
        <Link to={"/"}>
          <div className="font-bold text-xl text-blue-950">
            Digital Dispatch
          </div>
        </Link>
        <Link to={"/favorite"}>
          <button className="flex items-center gap-1 bg-blue-50 py-1.5 px-3 rounded-lg border-blue-500">
            <FontAwesomeIcon icon={faHeart} className="text-blue-950" />
            <span>Favorite</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
