import React from "react";
import "./services.css";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* START OF UI/UX */}
        <article className="service">
          <div className="service_title">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Graphic Design</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        {/* START OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_title">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Website Design</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>CMS Integration</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>SEO Best Practices</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Testing and Debugging</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        {/* START OF CONTENT CREATION */}
        <article className="service">
          <div className="service_title">
            <h3>Data Analysis</h3>
          </div>

          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Data Cleaning and Preprocessing</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Exploratory Data Analysis (EDA)</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Model Development</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Model Evaluation</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Data Visualization</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Data Reporting</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
