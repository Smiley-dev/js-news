import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

import classes from "./ArticleThumbnail.module.css";
import breakingNews from "../../assets/images/breaking-news.jpg";

const ArticleThumbnail = ({ article }) => {
  return (
    <Link
      to={{
        pathname: `/news/${slugify(article.title)}`,
        state: {
          article,
        },
      }}
    >
      <div className={classes.ArticleThumbnail}>
        {article.urlToImage ? (
          <img
            className={classes.imageThumbnail}
            src={article.urlToImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = breakingNews;
            }}
            alt={article.title}
          />
        ) : (
          <img
            className={classes.imageThumbnail}
            src={breakingNews}
            alt={article.title}
          />
        )}

        <div className={classes.title}>
          <h3>{article.title}</h3>
        </div>
        <div className={classes.description}>{article.description}</div>
      </div>
      <span className={classes.split}>
        <hr />
      </span>
    </Link>
  );
};

export default ArticleThumbnail;
