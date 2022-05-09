import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/shared/desktop/logo.svg";
import MenuIcon from "../assets/shared/mobile/menu.svg";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleClick(e) {
    console.log("Menu Open");
    setShowDropdown(!showDropdown);
  }
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
        <img onClick={handleClick} src={MenuIcon} alt="hamburger menu button" />
      </button>
      {showDropdown && (
        <div className="mobile-dropdown">
          <ul className="dropdown-links">
            <li>
              <Link to="/stories" className="dropdown__link">
                stories
              </Link>
            </li>
            <li>
              <Link to="/features" className="dropdown__link">
                features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="dropdown__link">
                pricing
              </Link>
            </li>
          </ul>
          <div className="dropdown-divider"></div>
          <button className="btn btn--black dropdown-btn">get an invite</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
