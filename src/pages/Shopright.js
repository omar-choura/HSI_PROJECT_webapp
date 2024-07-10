import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import ShopRight2 from "../components/ShopRight2";

const Shopright = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="2 column shop right sidebar" />
      </div>
      <ShopRight2 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Shopright;
