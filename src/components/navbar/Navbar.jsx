import React from "react";
import "./navbar.scss";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className="navbar fw-bold navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <a className="navbar-brand" href="#">
          Fake Store
        </a>
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
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Code Link
              </a>
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
                <a className="dropdown-item">Electronics</a>
                <a className="dropdown-item">Men's Clothing</a>
                <a className="dropdown-item">Women's Clothing</a>
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
