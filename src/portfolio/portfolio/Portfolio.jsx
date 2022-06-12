import React, { useState } from "react";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      title: 'Calendar',
      img: 'img/portfolio/03-large.jpg',
      type: 'react',
      url: '',
      built: 'React - Node'
    },
    {
      title: 'Dashboard',
      img: 'img/portfolio/01-large.jpg',
      type: 'angular',
      url: '',
      built: 'Angular- Node'
    },{
      title: 'Shop apllication',
      img: 'img/portfolio/05-large.jpg',
      type: 'react',
      url: '',
      built: 'React - Node'
    },

  ]);

  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title text-center center">
          <h2>Portfolio</h2>
          <hr />
        </div>
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li>
                  <a href="#" data-filter="*" className="active">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".react">
                    React
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".angular">
                    Angular
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".backend">
                    Backend
                  </a>
                </li>
              </ol>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div className="portfolio-items">
         {
          projects.map(project => <PortfolioItem {...project} /> )
         }
          </div>
        </div>
      </div>
    </div>
  );
};
