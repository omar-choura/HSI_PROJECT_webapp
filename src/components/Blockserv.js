import React from "react";
import img1 from "../img/blocks/ma1.jpg";
import img2 from "../img/blocks/ma22.jpg";
import img3 from "../img/blocks/mach3.png";
import img4 from "../img/blocks/mach4.png";

const Blockserv = () => {
  return (
    <div className="blocks-services-area wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12">
            <div className="single-blocks-services">
              <div className="single-blocks-img">
                <img src={img1} alt="img-1" className="img-fluid" />
              </div>
              <h3>
                <a>Ligne CNC de perçage et débitage des profilés:</a>
              </h3>
              <p>
                Nombre d'axe et broche de perçage: 3 <br />
                -Type de profilé: HEB, HEA, IPE, UPN... <br />
                -Dimension de profilé: De 160 au 1200mm
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="single-blocks-services">
              <div className="single-blocks-img">
                <img src={img2} alt="img-2" className="img-fluid" />
              </div>
              <h3>
                <a>Machine CNC Plasma:</a>
              </h3>
              <p>
                -Dimensions maximales <br />
                de la tôle : 6 x 2 m
                <br />
                -Epaisseur maximal de la tôle : 65 mm
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="single-blocks-services">
              <div className="single-blocks-img">
                <img src={img3} alt="img-3" className="img-fluid" />
              </div>
              <h3>
                <a>Rouleuse de tôles à 4 rouleaux :</a>
              </h3>
              <p>
                - Largeur maximale : 2 m <br />
                - Epaisseur maximal : 20mm
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="single-blocks-services">
              <div className="single-blocks-img">
                <img src={img4} alt="img-4" className="img-fluid" />
              </div>
              <h3>
                <a>9 poste de soudure MIG 400A</a>
              </h3>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Blockserv;
