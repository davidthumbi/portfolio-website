import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="David Thumbi" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ Clients Worldwide</small>
            </article>

            <article className="about_card">
              <GoChecklist className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>

          <p>
            As a junior developer, I'm deeply immersed in programming and
            constantly eager to explore new technologies. Whether it's mastering
            emerging frameworks like vue js or diving into machine learning
            libraries, I thrive on tackling challenges and making meaningful
            contributions to innovative projects. With a relentless pursuit of
            growth and a keen eye for detail, I am poised to seize every
            opportunity for advancement in my development journey.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
