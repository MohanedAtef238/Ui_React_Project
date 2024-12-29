import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/assets/Sources/css/NavBarTopFixed.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Travel & Destination
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TravelList">
              Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog-list">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/InfoPage">
              Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
