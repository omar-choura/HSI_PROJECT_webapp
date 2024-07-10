import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
const Mainslider = () => {
  const options = {
    loop: true,
    autoplay: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
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
      <div className="slider-area">
        <div className="tractor-main-slider">
          <OwlCarousel className="owl-carousel owl-theme" {...options}>
            <div className="tractor-single-slider slid-bg-1">
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1>
                          <span>h </span>steel <span>industry</span> <br />
                          choix pour l'industrie
                        </h1>
                        <p>
                        La société HASSAIRI STEEL INDUSTRIE opère dans le domaine de construction
                        métallique. Ses principaux produits consistent en la fabrication d’ouvrages et d’immeubles
                        en structures métalliques ainsi que des bâtiments industriels métalliques.La société HASSAIRI STEEL INDUSTRIE opère dans le domaine de construction
                        métallique. Ses principaux produits consistent en la fabrication d’ouvrages et d’immeubles
                        en structures métalliques ainsi que des bâtiments industriels métalliques.
                        </p>
                        <a href="#" className="btn btn-type-1">
                          Nos services
                        </a>
                        <a href="#" className="btn btn-type-2">
                          Acheter maintenant
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tractor-single-slider slid-bg-2">
              <div className="tractor-single-table">
                <div className="tractor-single-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1>
                        <span>h </span>steel <span>industry</span> <br />
                            choix pour l'industrie
                        </h1>
                        <p>
                        Son expérience, sa bonne réputation, la multitude et la diversité de ces champs d’action,
                        la compétence de son encadrement et la réussite sans équivoque dans tous les projets
                        qu’elle a entrepris, a permis à HSI, de devenir un partenaire quasi-incontournable dans la
                        gestion, le management et la réalisation des plus grands projets internationaux.
                         
                        </p>
                        <a href="#" className="btn btn-type-1">
                          Nos services
                        </a>
                        <a href="#" className="btn btn-type-2">
                          Acheter maintenant
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Mainslider;
