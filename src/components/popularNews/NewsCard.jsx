import React from "react";

function NewsCard() {
  return (
    <div className="rounded-md p-3 shadow-sm mb-3 flex items-start">
      <div className="rounded-sm overflow-hidden w-20 mr-2">
        <img
          src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/06/18/messi.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="text-sm font-semibold flex-1 text-slate-800">
        Messi, Argentina set to defend Copa America title
      </div>
    </div>
  );
}

export default NewsCard;
