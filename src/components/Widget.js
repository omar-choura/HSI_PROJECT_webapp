import React from "react";
import wdg1 from "../img/wdg/wdg-img-1.jpg";
import wdg2 from "../img/wdg/wdg-img-2.jpg";
import wdg3 from "../img/wdg/wdg-img-3.jpg";
import wdg4 from "../img/wdg/wdg-img-4.jpg";
import wdg5 from "../img/wdg/wdg-img-5.jpg";
import wdg6 from "../img/wdg/wdg-img-6.jpg";
import wdg7 from "../img/wdg/wdg-img-7.jpg";
import wdg8 from "../img/wdg/wdg-img-8.jpg";
import wdg9 from "../img/wdg/wdg-img-9.jpg";
const Widget = () => {
  return (
    <>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>latest</strong> post<span></span>
              </h4>
              <div className="sid-wdg-post">
                <div className="single-wdg-post">
                  <div className="wdg-post-img">
                    <a href="#">
                      <img
                        src={wdg1}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="wdg-post-content">
                    <h5>
                      <a href="#">Simply dummy text of in typesetting</a>
                    </h5>
                    <span>may 03, 2019</span>
                  </div>
                </div>

                <div className="single-wdg-post">
                  <div className="wdg-post-img">
                    <a href="#">
                      <img
                        src={wdg2}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="wdg-post-content">
                    <h5>
                      <a href="#">Simply dummy text of in typesetting</a>
                    </h5>
                    <span>may 03, 2019</span>
                  </div>
                </div>

                <div className="single-wdg-post">
                  <div className="wdg-post-img">
                    <a href="#">
                      <img
                        src={wdg3}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="wdg-post-content">
                    <h5>
                      <a href="#">Simply dummy text of in typesetting</a>
                    </h5>
                    <span>may 03, 2019</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>post</strong> archive
              </h4>
              <ul className="wdg-post-archive">
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i>all<span>470</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i>jun 2016
                    <span>(11)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i>aug 2017
                    <span>(02)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i>sep 2018
                    <span>(13)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i>dec 2019
                    <span>(444)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>follow</strong> us
              </h4>
              <ul className="wdg-follow-us">
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
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>gallery</strong> widget<span></span>
              </h4>
              <div className="gallery-all-img">
                <a href="#">
                  <img src={wdg4} alt="wdg-img" className="img-fluid" />
                </a>
                <a href="#">
                  <img src={wdg5} alt="wdg-img" className="img-fluid" />
                </a>
                <a href="#">
                  <img src={wdg6} alt="wdg-img" className="img-fluid" />
                </a>
                <a href="#">
                  <img src={wdg7} alt="wdg-img" className="img-fluid" />
                </a>
                <a href="#">
                  <img src={wdg8} alt="wdg-img" className="img-fluid" />
                </a>
                <a href="#">
                  <img src={wdg9} alt="wdg-img" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
