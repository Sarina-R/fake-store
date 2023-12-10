import React from "react";
import "./navbar.scss";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar fw-bold navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <Link className="navbar-brand" to="/">
          Fake Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://github.com/Sarina-R/fake-store"
              >
                Code Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter By Category
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/products/electronics">
                  Electronics
                </Link>
                <Link className="dropdown-item" to="/products/men's clothing">
                  Men's Clothing
                </Link>
                <Link className="dropdown-item" to="/products/women's clothing">
                  Women's Clothing
                </Link>{" "}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <i>
                <IoSearch />
              </i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

// Export the React component
export default Navbar;
