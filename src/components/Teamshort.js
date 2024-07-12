import React from "react";
import sepimg from "../img/separ-logo.png";
import img2 from "../img/team/Capture d’écran 2024-07-11 104951.jpg";

const Teamshort = () => {
  return (
    <>
      <div className="team-area sec-p-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="section-title text-center mb-70">
                <h2>meet our team</h2>
                <span>
                  <img src={sepimg} alt="separetor" />
                </span>
                <p></p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center"> {/* Centering the content */}
            <div className="col-md-4">
              <div className="single-team-wraper team-active">
                <div className="team-img-wrape">
                  <img className="img-fluid" src={img2} alt="team-img" />
                  <div className="member-desig">
                    <h4>founder</h4>
                  </div>
                </div>
                <div className="single-team-content">
                  <div className="team-social-hvr text-center"> {/* Centering the content */}
                    <div className="member-title2">
                      <h3>
                        <a href="#">Houssemeddine HASSAIRI</a>
                      </h3>
                      <a href="mailto:info@david.com">contact.houssemhassairi@gmail.com</a>
                    </div>
                    <div className="team-social-text">
                      <ul className="team-social">
                        <li>
                          <a href="https://www.facebook.com/houssem.hassairi.3/?_rdr">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/houssem-hassairi-468b7b85/?originalSubdomain=tn">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      <p>
                        Mr « Housseleddine HASSAIRI », à la tête de la société HSI est de formation universitaire est spécialisée en construction métallique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Teamshort;
