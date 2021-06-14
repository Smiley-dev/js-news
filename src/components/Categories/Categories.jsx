import React from "react";
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
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

const Categories = ({ country, setCategory }) => {
  return (
    <div className={classes.Categories}>
      {categories.map((category) => {
        return (
          <CategoryDropdown
            key={category}
            category={category}
            country={country}
            setCategory={setCategory}
          />
        );
      })}
    </div>
  );
};

export default Categories;
