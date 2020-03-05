import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books
      </a>

      <a className="navbar-item" href="/search">
        Search
      </a>

      <a className="navbar-item" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
