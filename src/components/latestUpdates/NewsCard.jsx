import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function NewsCard() {
  return (
    <div className="rounded-lg p-3 shadow mb-3">
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/06/18/messi.jpg"
          alt=""
        />
      </div>
      <div className="text-lg font-semibold mt-2 text-slate-800">
        Messi, Argentina set to defend Copa America title
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-slate-500">22 mins ago</div>
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-blue-950 cursor-pointer text-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
