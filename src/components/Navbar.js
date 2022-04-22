import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/shared/desktop/logo.svg";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={CompanyLogo} alt="Photosnap" />
      </Link>

      <ul className="nav__links">
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
      <button className="btn btn--black">get an invite</button>
    </nav>
  );
}

export default Navbar;
