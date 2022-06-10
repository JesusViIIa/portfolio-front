import React, { useEffect } from "react";
import { About } from "./portfolio/About";
import { Contact } from "./portfolio/contact/Contact";
import { Footer } from "./portfolio/fotter/Footer";
import { Header } from "./portfolio/Header";
import { Navigation } from "./portfolio/Navigation";
import { Portfolio } from "./portfolio/portfolio/Portfolio";
export const App = () => {
 
  
  return (
    <>
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Navigation --> */}
      <Navigation />
      {/* <!-- About Section --> */}
      <About />
      {/* <!-- Portfolio Section --> */}
      <Portfolio />
      {/* <!-- Contact Section --> */}
      <Contact />
      <Footer />
    </>
  );
};
