import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import brand from "../img/logo.png";
import { Link } from "react-router-dom";

const Headermidel = () => {
  const options = {
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="header-middle-area sec-p-30">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="header-middle-logo">
              <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                <img src={brand} alt="logo" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="col-md-7">
            <ul className="header-middle-short-info">
              <OwlCarousel
                className="owl-carousel owl-theme float-right"
                {...options}
              >
                <li>
                  <i className="fa fa-phone"></i>
                  <div className="short-info">
                    Tel:
                    <h4>(+216) 21 412 412</h4>
                  </div>
                </li>

                <li>
                  <i className="fa fa-at"></i>
                  <div className="short-info">
                    email address:
                    <h4 style={{ textTransform: "lowercase" }}>
                      contact.houssem
                      hassairi@gmail.com
                    </h4>
                  </div>
                </li>

                <li>
                  <i className="fa fa-map-marker"></i>
                  <div className="short-info">
                    address location:
                    <h4>Route Mahdia Km 10, sfax</h4>
                  </div>
                </li>
              </OwlCarousel>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermidel;
