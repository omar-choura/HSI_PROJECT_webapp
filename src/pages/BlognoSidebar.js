import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import BlognoSidebar1 from "../components/BlognoSidebar1";

const BlognoSidebar = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="1 column blog" />
      </div>
      <BlognoSidebar1 />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default BlognoSidebar;
