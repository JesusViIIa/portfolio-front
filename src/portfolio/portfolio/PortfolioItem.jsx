import React from 'react'

export const PortfolioItem = ({title, img, type, url, built}) => {
  return (
    <div className={`col-sm-6 col-md-3 col-lg-3 ${type}`}>
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href={url}
                    title={`${title} ${built}` }
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>{title} <br /><small style={{color: 'white'}} >{built}</small> </h4>
                    </div>
                    <img
                      src={img}
                      className="img-responsive"
                      alt={`${title} ${built}` }
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
  )
}
