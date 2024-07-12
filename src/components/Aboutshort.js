import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import img1 from "../img/about/ma11.jpg";
import img2 from "../img/about/Capture d’écran 202442111.png";
const Aboutshort = () => {
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
      <div className="about-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>À propos de notre histoire</h2>
              <p>
              Elle est créée en 2016, la société HASSAIRI STEEL INDUSTRIE a réussi à se faire
              tailler une part de marché importante dans le domaine de construction métallique. Ceci
              revient en particulier au savoir faire de son équipe dirigeants, au savoir faire acquis depuis
              et même avant sa création ainsi que de la qualité des produits et services fournis. Mr
              « Housseleddine HASSAIRI », à la tête de la société HSI est de formation universitaire
              est spécialisée en construction métallique. Avant d’entamer son propre projet, il a cumulé
              une carrière professionnelle de plus de 10 ans (depuis 2005) au sein de sociétés familiales
              spécialisées en la construction métallique et le commerce des produits métallurgique{" "}
              </p>
              <a href="#" className="btn btn-type-5 mt-30">
                about more
              </a>
            </div>
            <div className="col-md-6">
              <div className="about-slider-wraper">
                <OwlCarousel className="owl-theme owl-carousel" {...options}>
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
        </div>
      </div>
    </>
  );
};

export default Aboutshort;
