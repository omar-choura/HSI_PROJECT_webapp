import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import ShopLeft2 from "../components/ShopLeft2";

const Shopleft = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="2 column shop left sidebar" />
      </div>
      <ShopLeft2 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Shopleft;
