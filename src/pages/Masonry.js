import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import BlogCol3 from "../components/BlogCol3";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import Masonry1 from "../components/Masonry1";

const Masonry = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="masonry 3 column blog" />
      </div>
      <Masonry1 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Masonry;
