import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Mainslider from "../components/Mainslider";
import Blockserv from "../components/Blockserv";
import Projects from "../components/Projects";
import Aboutshort from "../components/Aboutshort";
import Counterup from "../components/Counterup";
import Servicesshort from "../components/Servicesshort";
import Cta from "../components/Cta";
import Teamshort from "../components/Teamshort";
import Quote from "../components/Quote";
import ProgressTab from "../components/ProgressTab";
import Testimonial from "../components/Testimonial";
import VideoAccordian from "../components/VideoAccordian";
import Blogshort from "../components/Blogshort";
import Clientslider from "../components/Clientslider";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Navmenu from "../components/Navmenu";
const Home = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Mainslider />
        <Blockserv />
      </div>
      <Projects />
      <Aboutshort />
      <Counterup />
      <Servicesshort />
      <Cta />
      <Teamshort />
      <Quote />
      <ProgressTab />
      <Testimonial />
      <VideoAccordian />
      <Blogshort />
      <Clientslider />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Home;
