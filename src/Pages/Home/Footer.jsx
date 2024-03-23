import { Link } from "react-scroll";
import { Icon } from "@iconify-icon/react";

import React from "react";
const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/hannah-gkim/", "_blank");
};
const openGitHub = () => {
  window.open("https://github.com/hannah-gkim", "_blank");
};

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="footer-nav-text"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="footer-nav-text"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="footer-nav-text"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="footer-nav-text"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="footer-nav-text"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li onClick={openGitHub} className="footer-icon">
              <Icon icon="uil-github-alt" width={"20px"} />
            </li>
            <li onClick={openLinkedIn} className="footer-icon">
              <Icon icon="uil-linkedin-alt" width={"20px"} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--content--container">
        <p className="footer__copy">&#169; 2024 by Hannah G Kim</p>
      </div>
    </footer>
  );
}

export default Footer;
