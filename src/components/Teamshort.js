import React from "react";
import sepimg from "../img/separ-logo.png";
import img1 from "../img/team/team-1.jpg";
import img2 from "../img/team/team-2.jpg";
import img3 from "../img/team/team-3.jpg";
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit
                  amet,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-team-wraper">
                <div className="team-img-wrape">
                  <img className="img-fluid" src={img1} alt="team-img" />
                  <div className="member-desig">
                    <h4>founder</h4>
                  </div>
                </div>
                <div className="single-team-content">
                  <div className="member-title">
                    <h3>
                      <a href="#">michael robert</a>
                    </h3>
                    <a href="mailto:info@rob.com">info@rob.com</a>
                  </div>
                  <div className="team-social-hvr">
                    <div className="member-title2">
                      <h3>
                        <a href="#">michael robert</a>
                      </h3>
                      <a href="mailto:info@rob.com">info@rob.com</a>
                    </div>
                    <div className="team-social-text">
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with me a righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-team-wraper team-active">
                <div className="team-img-wrape">
                  <img className="img-fluid" src={img2} alt="team-img" />
                  <div className="member-desig">
                    <h4>developer</h4>
                  </div>
                </div>
                <div className="single-team-content">
                  <div className="member-title">
                    <h3>
                      <a href="#">david shams lr</a>
                    </h3>
                    <a href="mailto:info@david.com">info@david.com</a>
                  </div>

                  <div className="team-social-hvr">
                    <div className="member-title2">
                      <h3>
                        <a href="#">Houssemeddine HASSAIRI</a>
                      </h3>
                      <a href="mailto:info@david.com">contact.houssemhassairi@gmail.com</a>
                    </div>
                    <div className="team-social-text">
                      <ul className="team-social">
                        <li>
                          <a href="#">
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
                        On the other hand, we denounce with me a righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-team-wraper">
                <div className="team-img-wrape">
                  <img className="img-fluid" src={img3} alt="team-img" />
                  <div className="member-desig">
                    <h4>designer</h4>
                  </div>
                </div>
                <div className="single-team-content">
                  <div className="member-title">
                    <h3>
                      <a href="#">william christopher</a>
                    </h3>
                    <a href="mailto:info@willim.uk">info@willim.uk</a>
                  </div>

                  <div className="team-social-hvr">
                    <div className="member-title2">
                      <h3>
                        <a href="#">william christopher</a>
                      </h3>
                      <a href="mailto:info@willim.uk">info@willim.uk</a>
                    </div>
                    <div className="team-social-text">
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with me a righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by
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
