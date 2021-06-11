import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = ({ selectedCountry, setSelectedCountry }) => {
  const changeCountryHandler = (e) => {
    setSelectedCountry(e.target.value);
    console.log(selectedCountry);
  };

  return (
    <div className={classes.Navbar}>
      <div className={classes.NavLinks}>
        <NavLink
          className={classes.Link}
          activeClassName={classes.active}
          to="/"
          exact
        >
          News
        </NavLink>
        <NavLink
          className={classes.Link}
          activeClassName={classes.active}
          to="/categories"
        >
          Categories
        </NavLink>
        <NavLink
          className={classes.Link}
          activeClassName={classes.active}
          to="/search"
        >
          Search
        </NavLink>
      </div>
      <div className={classes.countries}>
        <button value="gb" onClick={(e) => changeCountryHandler(e)}>
          GB
        </button>
        <button value="us" onClick={(e) => changeCountryHandler(e)}>
          US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
