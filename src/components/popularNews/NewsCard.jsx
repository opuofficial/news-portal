import React from "react";

function NewsCard({ article }) {
  const { title, urlToImage } = article;

  if (title == "[Removed]") {
    return;
  }

  return (
    <div className="rounded-md p-3 shadow-sm mb-3 flex items-start">
      {urlToImage && (
        <div className="rounded-sm overflow-hidden w-20 mr-2">
          <img src={urlToImage} alt="" className="w-full" />
        </div>
      )}

      <div className="text-sm font-semibold flex-1 text-slate-800">{title}</div>
    </div>
  );
}

export default NewsCard;
