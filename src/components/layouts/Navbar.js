import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Github LookUp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/find-user"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Users
              </Link>
              <div className="dropdown-menu" x-placement="bottom-start">
                <Link to="/find-user" className="dropdown-item">
                  User
                </Link>
                <Link to="/user-repos" className="dropdown-item" href="#">
                  Repositories
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/company-repos" className="nav-link">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
