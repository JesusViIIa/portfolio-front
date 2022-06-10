import React from "react";


export const Header = () => {



  const name='Jesus Villa'
  const profession = 'Web developer • Fronted • Not design'
  return (
    <header id="header">
  <div className="intro">
    <div className="container">
      <div className="row">
        <div className="intro-text">
          <h1>{name} </h1>
          <hr/>
          <p>{profession} </p>
          <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a> </div>
      </div>
    </div>
  </div>
</header>
  );
};
