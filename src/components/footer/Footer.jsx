import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/david-thumbi-08569a22b/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/davidthumbi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy;{new Date().getFullYear()} Made with ❤️ by David Thumbi. All
          rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
