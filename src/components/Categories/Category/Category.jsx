import React, { useEffect, useState, useRef } from "react";
import ArticleThumbnail from "../../ArticleThumbnail/ArticleThumbnail";
import classes from "./Category.module.css";
import Axios from "../../../Axios";
import ScrollButton from "../../../assets/ScrollButton/ScrollButton";

const Category = ({ category, country }) => {
  const [news, setNews] = useState({ articles: [] });
  const [isCollapsed, setIsCollappsed] = useState(true);
  const content = useRef(null);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await Axios.get("/", {
          params: {
            country: country,
            category: category,
            pageSize: 10,
          },
        });
        setNews(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const toggle = () => {
    setIsCollappsed(!isCollapsed);
  };

  return (
    <div className={classes.Category}>
      <button type="button" className={classes.categoryToggle} onClick={toggle}>
        {category}
      </button>

      <div
        className={`${classes.articlesWrapper} ${
          isCollapsed ? classes.collapsed : classes.expanded
        }`}
      >
        <ScrollButton
          direction="left"
          element={content.current}
          step={-10}
          speed={25}
          distance={100}
        />
        <div className={classes.articles} ref={content}>
          {news.articles.map((article) => {
            if (article.content && article.publishedAt) {
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
        </div>
        <ScrollButton
          direction="right"
          element={content.current}
          step={10}
          speed={25}
          distance={100}
        />
      </div>
    </div>
  );
};

export default Category;
