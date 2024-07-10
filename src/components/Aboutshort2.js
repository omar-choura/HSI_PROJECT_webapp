import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import img1 from "../img/about/about-1.jpg";
import img2 from "../img/about/Capture d’écran 202442111.png";
const Aboutshort2 = () => {
  const options = {
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      "<span><i class='fa fa-long-arrow-left '></i> prev</span>",
      "<span>next <i class='fa fa-long-arrow-right '></i></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="about-area sec-p-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="about-slider-wraper mb-20">
                <OwlCarousel className="owl-carousel owl-theme" {...options}>
                  <div className="about-single-item">
                    <img src={img1} alt="about-img" className="img-fluid" />
                    <h4>industrial experimental technologies</h4>
                  </div>
                  <div className="about-single-item">
                    <img src={img2} alt="about-img" className="img-fluid" />
                    <h4>industrial experimental technologies</h4>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2>about our history</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure praising pain was born and I will give you a
                complete account of the system, expound the actual teachings of
                the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itselfBut I must explain to you how
                all this mistaken idea of denouncing i and pleasure and praising
                pain was born and I will give you a complete account of system,
                and expound the actual teachings of{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutshort2;
