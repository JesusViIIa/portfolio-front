import React, { useState } from "react";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      title: 'Calendar',
      img: 'img/portfolio/calendar.jpg',
      type: 'react',
      url: 'https://react-calentar-front.vercel.app/',
      built: 'React - Node'
    },
    {
      title: 'Journal',
      img: 'img/portfolio/journal.jpg',
      type: 'react',
      url: 'https://journal-theta.vercel.app/',
      built: 'React - Firebase'
    },{
      title: 'Soon...',
      img: 'img/portfolio/01-large.jpg',
      type: 'angular',
      url: '',
      built: 'Building...'
    },
    {
      title: 'Soon...',
      img: 'img/portfolio/03-large.jpg',
      type: 'backend',
      url: '',
      built: 'Building...'
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
                  <a data-filter="*" className="active">
                    All
                  </a>
                </li>
                <li>
                  <a data-filter=".react">
                    React
                  </a>
                </li>
                <li>
                  <a data-filter=".angular">
                    Angular
                  </a>
                </li>
                <li>
                  <a data-filter=".backend">
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
