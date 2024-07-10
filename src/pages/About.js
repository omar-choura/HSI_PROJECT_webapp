import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Aboutshort2 from "../components/Aboutshort2";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";

const About = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="about" />
      </div>
      <Aboutshort2 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default About;
