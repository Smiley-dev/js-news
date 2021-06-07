import React from "react";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.Search}>
      <input className={classes.searchInput} type="text" />
    </div>
  );
}

export default Search;
