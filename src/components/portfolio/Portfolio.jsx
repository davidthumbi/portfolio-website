import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

// ARRAY OF PORTFOLIO PROJECTS

const data = [
  {
    id: 1,
    image: IMG1,
    title: "YouTube Clone",
    github: "https://github.com/davidthumbi/youtube-clone",
    demo: "https://metubeapp.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Responsive Design",
    github: "https://github.com/davidthumbi/responsive-design",
    demo: "https://netflix-responsive-design.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Personal Portfolio Website",
    github: "https://github.com/davidthumbi/portfolio-website",
    demo: "https://davidthumbi.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Vue JS Recipe Guide",
    github: "https://github.com/davidthumbi/vue-recipe-app",
    demo: "https://devrecipe.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Covid-19 Tracker App",
    github: "https://github.com/davidthumbi/vue-covid-tracker",
    demo: "https://covidtrackerapi.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "TechMonday Blog App",
    github: "https://github.com/davidthumbi/blogs-app",
    demo: "https://techmonday.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
