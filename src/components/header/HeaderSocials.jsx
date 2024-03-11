import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/david-thumbi-08569a22b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/davidthumbi" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      {/* <a
        href="https://dribbble.com/developer-dave"
        target="_blank"
        rel="noreferrer"
      >
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
