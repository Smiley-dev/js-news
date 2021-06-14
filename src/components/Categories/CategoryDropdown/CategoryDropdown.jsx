import React, { useEffect, useState, useRef } from "react";
import ArticleThumbnail from "../../ArticleThumbnail/ArticleThumbnail";
import classes from "./CategoryDropdown.module.css";
import Axios from "../../../Axios";
import ScrollButton from "../../../assets/ScrollButton/ScrollButton";
import { Link } from "react-router-dom";

const Category = ({ category, country, setCategory }) => {
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={classes.categoryToggle} onClick={toggle}>
          {category}
        </div>
        <Link
          className={classes.categoryLink}
          to={{ pathname: `/categories/${category}`, state: { category } }}
        >
          More news...
        </Link>
      </div>
      <div
        className={`${classes.articlesWrapper} ${
          isCollapsed ? classes.collapsed : classes.expanded
        }`}
      >
        <ScrollButton
          direction="left"
          element={content.current}
          step={-10}
          speed={15}
          distance={300}
        />
        <div className={classes.articles} ref={content}>
          {news.articles.map((article) => {
            if (article.content && article.publishedAt) {
              return (
                <div className={classes.article}>
                  <ArticleThumbnail key={article.title} article={article} />
                </div>
              );
            }
          })}
        </div>
        <ScrollButton
          direction="right"
          element={content.current}
          step={10}
          speed={15}
          distance={300}
        />
      </div>
    </div>
  );
};

export default Category;
