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

const Categories = ({ country }) => {
  return (
    <div className={classes.Categories}>
      {categories.map((category) => {
        return (
          <Category key={category} category={category} country={country} />
        );
      })}
    </div>
  );
};

export default Categories;
