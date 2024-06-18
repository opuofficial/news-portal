import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { formatDistanceToNow } from "date-fns";

function NewsCard({ article }) {
  const { description, publishedAt, title, url, urlToImage } = article;

  const date = new Date(publishedAt);
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  console.log(urlToImage);

  return (
    <div className="rounded-lg p-3 shadow mb-3">
      <a href={url} target="_blank">
        {urlToImage && (
          <div className="rounded-lg overflow-hidden">
            <img src={urlToImage} alt={title} />
          </div>
        )}
        <div className="text-lg font-semibold mt-2 text-slate-800">{title}</div>
        <div className="text-sm text-slate-500 mt-1">{description}</div>
      </a>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-slate-500">{relativeTime}</div>
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
