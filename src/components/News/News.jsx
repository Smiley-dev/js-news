import classes from "./News.module.css";
import React, { useState, useEffect } from "react";
import Axios from "../../Axios";
import ArticleThumbnail from "../ArticleThumbnail/ArticleThumbnail";

const News = () => {
  const [news, setNews] = useState({ articles: [] });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await Axios.get("/", {
          params: {
            country: "us",
          },
        });
        setNews(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className={classes.News}>
      {news.articles.map((article) => {
        if (article.content) {
          return (
            <ArticleThumbnail key={article.publishedAt} article={article} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default News;
