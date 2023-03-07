import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'

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
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about_card">
              <GoChecklist className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati cum adipisci nam 
            optio inventore commodi suscipit quidem architecto aperiam fuga id repellat eum, quam, veniam 
            iusto itaque nobis temporibus?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About