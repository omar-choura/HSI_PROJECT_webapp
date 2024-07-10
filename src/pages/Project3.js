import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Projects3 from "../components/Projects3";

const Project3 = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="4 column project" />
      </div>
      <Projects3 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Project3;
