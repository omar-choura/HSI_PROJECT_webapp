import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import img1 from "../img/client/client-1.png";
import img2 from "../img/client/client-2.png";
import img3 from "../img/client/client-3.png";
import img4 from "../img/client/client-4.png";
const Clientslider = () => {
  const options = {
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left '></i>",
      "<i class='fa fa-angle-right '></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="client-slider-area sec-p-100 bg-color3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all-client-slider ">
                <OwlCarousel className="owl-carousel owl-theme" {...options}>
                  <a href="#">
                    <div className="single-client">
                      <img src={img1} alt="client-img" className="img-fluid" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="single-client">
                      <img src={img2} alt="client-img" className="img-fluid" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="single-client">
                      <img src={img3} alt="client-img" className="img-fluid" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="single-client">
                      <img src={img4} alt="client-img" className="img-fluid" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="single-client">
                      <img src={img1} alt="client-img" className="img-fluid" />
                    </div>
                  </a>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientslider;
