import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
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
  );
};

export default Navbar;
