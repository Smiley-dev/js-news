import React from "react";
import News from "../News/News";

function Category(props) {
  return (
    <News category={props.location.state.category} country={props.country} />
  );
}

export default Category;
