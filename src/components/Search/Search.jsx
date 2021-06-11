import React, { useState, useMemo, useEffect } from "react";
import classes from "./Search.module.css";
import Axios from "../../Axios";
import debounce from "lodash.debounce";
import ArticleThumbnail from "../ArticleThumbnail/ArticleThumbnail";

function Search({ country }) {
  const [news, setNews] = useState({ articles: [] });
  const [search, setSearch] = useState("");

  const debouncedFetchNews = useMemo(
    () =>
      debounce(async (search, country) => {
        try {
          const result = await Axios.get("/", {
            params: {
              country: country,
              q: search,
            },
          });
          setNews(result.data);
        } catch (error) {
          console.log(error.message);
        }
      }, 500),
    [],
  );

  useEffect(() => {
    if (search !== "") {
      debouncedFetchNews(search, country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.Search}>
      <input
        className={classes.searchInput}
        type="text"
        onChange={handleSearch}
      />
      <div className={classes.searchResults}>
        {news.articles.length === 0 ? (
          <h1>Search</h1>
        ) : (
          news.articles.map((article) => {
            if (article.content) {
              return (
                <ArticleThumbnail key={article.publishedAt} article={article} />
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
}

export default Search;
