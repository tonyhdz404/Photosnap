import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/shared/desktop/logo.svg";
import MenuIcon from "../assets/shared/mobile/menu.svg";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={CompanyLogo} alt="Photosnap" />
      </Link>

      <ul className="nav__links fullscreen-nav">
        <li>
          <Link to="/stories" className="nav__link">
            stories
          </Link>
        </li>
        <li>
          <Link to="/features" className="nav__link">
            features
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="nav__link">
            pricing
          </Link>
        </li>
      </ul>
      <button className="btn btn--black fullscreen-nav">get an invite</button>
      <button className="mobile-menu">
        <img src={MenuIcon} alt="hamburger menu button" />
      </button>
    </nav>
  );
}

export default Navbar;
