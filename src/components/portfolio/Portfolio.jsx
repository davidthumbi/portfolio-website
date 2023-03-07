import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

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
    title: "Title",
    github: "https://github.com",
    demo: "demo",
  },
  {
    id: 5,
    image: IMG5,
    title: "Title",
    github: "https://github.com",
    demo: "demo",
  },
  {
    id: 6,
    image: IMG6,
    title: "Title",
    github: "https://github.com",
    demo: "demo",
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

<<<<<<< HEAD
export default Portfolio
=======
export default Portfolio;
>>>>>>> 8bb8153 (added projects)
