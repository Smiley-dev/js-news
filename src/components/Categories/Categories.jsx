import React from "react";
import Category from "./Category/Category";
import classes from "./Categories.module.css";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Categories = () => {
  return (
    <div className={classes.Categories}>
      {categories.map((category) => {
        return <Category key={category} category={category} />;
      })}
    </div>
  );
};

export default Categories;
