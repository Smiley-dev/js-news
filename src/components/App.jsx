import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Categories from "./Categories/Categories";
import Article from "./Article/Article";
import Search from "./Search/Search";
import classes from "./App.module.css";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category/Category";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("gb");

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Navbar
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <News {...props} country={selectedCountry} />}
          />
          <Route path="/news/:title" component={Article} />
          <Route
            path="/categories"
            exact
            render={(props) => (
              <Categories {...props} country={selectedCountry} />
            )}
          />
          <Route
            path="/categories/:category"
            render={(props) => (
              <Category {...props} country={selectedCountry} />
            )}
          />
          <Route
            path="/search"
            render={(props) => <Search {...props} country={selectedCountry} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
