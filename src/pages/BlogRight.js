import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import BlogRight1 from "../components/BlogRight1";

const BlogRight = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="2 Column Blog Right Sidebar" />
      </div>
      <BlogRight1 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default BlogRight;
