import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ dogs }) => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const navLinks = dogs.map((dog) => {
    return (
      <NavLink
        key={dog.name}
        className="nav-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={`/dogs/${dog.name.toLowerCase()}`}
      >
        {dog.name}
      </NavLink>
    );
  });
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/dogs">
          Dogs
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dogNav"
          aria-controls="dogNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dogNav">
          <div className="navbar-nav">{navLinks}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
