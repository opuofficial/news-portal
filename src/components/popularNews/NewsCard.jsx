import React from "react";

function NewsCard({ article }) {
  const { title } = article;

  if (title == "[Removed]") {
    return;
  }

  return (
    <div className="rounded-md p-3 shadow-sm mb-3">
      <div className="text-sm font-semibold flex-1 text-slate-800">{title}</div>
    </div>
  );
}

export default NewsCard;
