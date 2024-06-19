import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from "date-fns";
import favoriteArticles from "../../favoriteArticles";
import { useDispatch, useSelector } from "react-redux";
import { addArticleUrl } from "../../features/news/favoriteArticlesSlice";

function NewsCard({ article }) {
  const dispatch = useDispatch();
  const { description, publishedAt, title, url, urlToImage } = article;
  const { articlesUrl } = useSelector((state) => state.favoriteArticles);

  const [favorite, setFavorite] = useState(false);
  const date = new Date(publishedAt);
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  useEffect(() => {
    const isFavorite = articlesUrl.includes(url);
    setFavorite(isFavorite);
  }, [dispatch]);

  const addToFavorite = async () => {
    await favoriteArticles.addArticle(article);
    setFavorite(true);
    dispatch(addArticleUrl(url));
  };

  const toggleFavorite = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      addToFavorite();
    }
  };

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
        <div className="p-2" onClick={toggleFavorite}>
          <FontAwesomeIcon
            icon={favorite ? heartSolid : heartRegular}
            className="text-blue-950 cursor-pointer text-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
