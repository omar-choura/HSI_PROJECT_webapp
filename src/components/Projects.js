import React from "react";
import secimg from "../img/separ-logo.png";
import proimg1 from "../img/project/P1.png";
import proimg2 from "../img/project/P2.png";
import proimg3 from "../img/project/P3.png";
import proimg4 from "../img/project/P4.png";
import proimg5 from "../img/project/P5.png";
import proimg6 from "../img/project/P6.png";
import proimg7 from "../img/project/P7.png";
import proimg8 from "../img/project/P8.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="project-area bg-color3 sec-p-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="section-title text-center mb-70">
                <h2>Nos références :</h2>
                <span>
                  <img src={secimg} alt="separetor" />
                </span>
                <p>
                La société HSI dispose aujourd’hui de plusieurs références de taille en Tunisie,
                témoignant de la qualité de ses produits, de la confiance de ses clients en ses produits et
                services et de son savoir-faire, dont notamment :
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-wraper">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg1} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Central électrique à cycle combiné (1000 TONES) :</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg2} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Central électrique à cycle combiné (1000 TONES) :</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg3} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Central électrique à cycle combiné (1000 TONES) :</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg4} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Construction et montage de la structure métallique (WALLYS CAR)</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-20"></div>

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg5} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Construction et montage de la structure métallique (WALLYS CAR)</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg6} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3>Construction et montage de la structure métallique (WALLYS CAR)</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg7} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3> Station de pompage de barrage Maroc :</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={proimg8} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <Link to="">
                      <h3> Station de pompage de barrage Maroc :</h3>
                    </Link>
                    <Link className="btn" to="">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="" className="btn btn-type-5 mt-30">
          more
        </Link>
      </div>
    </>
  );
};

export default Projects;
