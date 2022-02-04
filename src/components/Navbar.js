import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <a className="navbar-brand" id="name" href="#">
        Digital Soup
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              smooth={true}
              to="header"
              offset={-110}
              className="nav-link"
              id="home"
              href="#"
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>

          <li className="nav-item">
            <Link
              smooth={true}
              to="contact"
              offset={-110}
              className="nav-link"
              id="port"
              href="#"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
