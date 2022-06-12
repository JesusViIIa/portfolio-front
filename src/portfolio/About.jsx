import React from 'react'

export const About = () => {
  return (
    <div id="about">
  <div className="container">
    <div className="section-title text-center center">
      <h2>About Me</h2>
      <hr/>
    </div>
    <div className="row">
      <div className="col-md-12 text-center"><img src="img/about.jpg" className="img-responsive"/></div>
      <div className="col-md-8 col-md-offset-2">
        <div className="about-text">
          <p>Beginning web developer, I am focused on frontend development with different technologies and libraries such as React, Angular, REST API connection, nodeJs and MongoDB for backend and databases.</p>
          <p>I study smart grids and cybersecurity, therefore I have learned everything independently, I have spent the last few months improving my skills and continuing to learn new technologies.</p>
          <a href="#portfolio" className="btn btn-default btn-lg page-scroll">My Portfolio</a> </div>
      </div>
    </div>
  </div>
</div>
  )
}
