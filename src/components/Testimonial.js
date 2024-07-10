import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import img1 from "../img/testimonial/test-thm-1.png";
import img2 from "../img/testimonial/test-thm-2.jpg";
const Testimonial = () => {
  const options = {
    loop: true,
    autoplay: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
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
      <div className="testimonial-area sec-p-100 text-center testimonial-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all-testimonial-wraper">
                <OwlCarousel className=" owl-carousel owl-theme" {...options}>
                  <div className="single-testimonial">
                    <div className="client-message">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod you a tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </p>
                    </div>
                    <div className="client-img">
                      <img src={img1} alt="img-1" className="img-fluid" />
                    </div>
                    <div className="client-title">
                      <h3>michael david</h3>
                      <h5>engineer</h5>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="client-message">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod you a tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                      </p>
                    </div>
                    <div className="client-img">
                      <img src={img2} alt="img-2" className="img-fluid" />
                    </div>
                    <div className="client-title">
                      <h3>david marth</h3>
                      <h5>ceo</h5>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
