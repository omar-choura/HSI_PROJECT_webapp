import React from "react";
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Breadcrumb from "../components/Breadcrumb";
import Projects1 from "../components/Projects1";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Scrolltop from "../components/Scrolltop";
import LoginRegistration from "../components/LoginRegistration";

const Login = () => {
  return (
    <>
      <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Breadcrumb name="login" />
      </div>
      <LoginRegistration />
      <Quote />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Login;
