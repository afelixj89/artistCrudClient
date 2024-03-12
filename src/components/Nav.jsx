import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navBar">
      <button>
      <NavLink className="navText" to="/">
        Home
      </NavLink></button>
      <button>
      <NavLink to="/artists" className="navText">
        Artist's
      </NavLink></button>
      <button>
      <NavLink to="/add-artist" className="navText">
        Add New Artist!
      </NavLink></button>
    </nav>
  );
}

export default Nav;
