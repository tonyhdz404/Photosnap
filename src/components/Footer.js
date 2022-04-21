import React from "react";
import LogoWhite from "../assets/shared/desktop/logo-white.svg";
import FacebookIcon from "../assets/shared/desktop/facebook.svg";
import YoutubeIcon from "../assets/shared/desktop/youtube.svg";
import TwitterIcon from "../assets/shared/desktop/twitter.svg";
import PinterestIcon from "../assets/shared/desktop/pinterest.svg";
import InstagramIcon from "../assets/shared/desktop/instagram.svg";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo-icons">
          <img src={LogoWhite} alt="photosnap" />
          <div className="social-icons">
            <img src={FacebookIcon} alt="facebook" />
            <img src={YoutubeIcon} alt="youtube" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={PinterestIcon} alt="pinterest" />
            <img src={InstagramIcon} alt="instagram" />
          </div>
        </div>
        <ul className="footer-links">
          <li>
            <a className="footer__link" href="#">
              home
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              stories
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              features
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              pricing
            </a>
          </li>
        </ul>
        <div className="copywrite-container">
          <button className="btn-arrow btn-arrow--white">
            get an invite
            <img
              className="btn-arrow-icon"
              src={ArrowRightWhite}
              alt="Arrow Right"
            />
          </button>
          <p className="copywrite">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
