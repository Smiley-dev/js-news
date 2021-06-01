import React, { useEffect, useState } from "react";
import ArticleThumbnail from "../../ArticleThumbnail/ArticleThumbnail";
import classes from "./Category.module.css";
import Axios from "../../../Axios";

const Category = ({ category }) => {
  const [news, setNews] = useState({ articles: [] });
  const [isCollapsed, setIsCollappsed] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await Axios.get("/", {
          params: {
            country: "us",
            category: category,
            pageSize: 5,
          },
        });
        setNews(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    setIsCollappsed(!isCollapsed);
  };

  return (
    <div className={classes.Category}>
      <button type="button" className={classes.categoryToggle} onClick={toggle}>
        {category}
      </button>
      <div>
        <div
          className={`${classes.articles} ${
            isCollapsed ? classes.collapsed : classes.expanded
          }`}
        >
          <button style={{ position: "sticky", left: 0, top: 0 }}>Left</button>
          {news.articles.map((article) => {
            if (article.content) {
              return (
                <div className={classes.article}>
                  <ArticleThumbnail
                    key={article.publishedAt}
                    article={article}
                  />
                </div>
              );
            }
            return null;
          })}
          <button style={{ position: "sticky", right: 0, top: 0 }}>
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
