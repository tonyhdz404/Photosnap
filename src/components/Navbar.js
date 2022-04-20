import React from "react";
import CompanyLogo from "../assets/shared/desktop/logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={CompanyLogo} alt="Photosnap" />
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#">
            stories
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            features
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            pricing
          </a>
        </li>
      </ul>
      <button className="btn btn--black">get an invite</button>
    </nav>
  );
}

export default Navbar;
