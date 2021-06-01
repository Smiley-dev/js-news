import React from "react";
import classes from "./Article.module.css";

const Article = (props) => {
  const { title, content, publishedAt, urlToImage } =
    props.location.state.article;
  const published = new Date(publishedAt).toUTCString();

  return (
    <div className={classes.Article}>
      <div className={classes.title}>{title}</div>
      <p>{published}</p>
      <img className={classes.articleImage} src={urlToImage} alt="" />
      <p>{content}</p>
    </div>
  );
};

export default Article;
