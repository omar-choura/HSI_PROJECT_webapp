import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Servicesshort2 from "../components/Servicesshort2";
import Quote from "../components/Quote";

const Services = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="services" />
      </div>
      <Servicesshort2 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Services;
