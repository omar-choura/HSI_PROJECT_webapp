import React from "react";
import brand from "../img/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-area black-bg sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget widget-1">
                <div className="footer-logo">
                  <Link to="">
                    <img src={brand} alt="footer-logo" className="img-fluid" />
                  </Link>
                </div>

                <p>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when ands unknown printer took a galley of
                  type and it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic pop
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-widget widget-2">
                <h3>popular link</h3>
                <ul className="footer-popu-link">
                  <li>
                    <Link to="">
                      laboratory<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      industry<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      materials<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      audio<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      metallurgy<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      video<i className="fa fa-arrow-circle-o-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-widget widget-3">
                <h3>tags widget</h3>
                <ul className="list-inline tag-list">
                  <li>
                    <Link to="">awesome</Link>
                  </li>
                  <li>
                    <Link to="">beautiful</Link>
                  </li>
                  <li>
                    <Link to="">flat design</Link>
                  </li>
                  <li>
                    <Link to="">ios</Link>
                  </li>
                  <li>
                    <Link to="">themforest</Link>
                  </li>
                  <li>
                    <Link to="">mass</Link>
                  </li>
                  <li>
                    <Link to="">awesome</Link>
                  </li>
                  <li>
                    <Link to="">beautiful</Link>
                  </li>
                  <li>
                    <Link to="">flat design</Link>
                  </li>
                  <li>
                    <Link to="">ios</Link>
                  </li>
                  <li>
                    <Link to="">themforest</Link>
                  </li>
                  <li>
                    <Link to="">mass</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-widget widget-3">
                <h3>contact info</h3>
                <div className="office-address border-bottom mb-20 pb-20">
                  <h4>
                    <Link to="">office one</Link>
                  </h4>
                  <p>123 jessore js, khulna kh, chowrasta, jessore</p>
                </div>
                <ul className="footer-social">
                  <li>
                    <Link className="bg-color4" to="">
                      <i className="fa fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="bg-color5" to="">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="bg-color6" to="">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="bg-color7" to="">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copy-right text-center">
                copyright <Link to="">
                  tr<span>a</span>ct<span>o</span>ur
                </Link>
                | all rights reserved | designed by theme_group
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
