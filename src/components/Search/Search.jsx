import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";
import Axios from "../../Axios";
import { debounce } from "lodash";

function Search() {
  const [news, setNews] = useState({ articles: [] });
  const [search, setSearch] = useState("");

  const fetchNews = debounce(async (search) => {
    try {
      const result = await Axios.get("/", {
        params: {
          country: "us",
          q: search,
        },
      });
      console.log(result.data);
      setNews(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }, 500);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchNews(search);
    console.log(news);
  };

  /*   useEffect(() => {
    fetchNews(search);
  }, [search, fetchNews]); */

  return (
    <div className={classes.Search}>
      <input
        className={classes.searchInput}
        type="text"
        onChange={handleSearch}
      />
      <div>
        {news.articles.length === 0 ? (
          <h1>Search</h1>
        ) : (
          news.articles.map((article) => <h1>{article.title}</h1>)
        )}
      </div>
    </div>
  );
}

export default Search;
