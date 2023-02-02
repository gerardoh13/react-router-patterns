import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  const links = Object.keys(colors).map((color) => {
    return (
      <Link key={color} className="nav-link" to={`/colors/${color}`}>
        {color}
      </Link>
    );
  });
  return (
    <>
      <div className="topDiv">
        <h1>Welcome to the color factory.</h1>
        <Link className="addLink" to="/colors/new">
          Add a color
        </Link>
      </div>
      <div>
        <p>Please select a color.</p>
        {links}
      </div>
    </>
  );
};

export default ColorList;
