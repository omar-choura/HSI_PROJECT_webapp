import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import ShopLeft3 from "../components/ShopLeft3";

const Shopleft3 = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="3 column shop left sidebar" />
      </div>
      <ShopLeft3 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Shopleft3;
