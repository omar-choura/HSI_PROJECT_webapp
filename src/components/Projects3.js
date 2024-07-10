import React from "react";
import img1 from "../img/project/project-1.jpg";
import img2 from "../img/project/project-2.jpg";
import img3 from "../img/project/project-3.jpg";
import img4 from "../img/project/project-4.jpg";
import img5 from "../img/project/project-5.jpg";
import img6 from "../img/project/project-6.jpg";
import img7 from "../img/project/project-7.jpg";
import img8 from "../img/project/project-8.jpg";
const Projects3 = () => {
  return (
    <>
      <div className="project-area sec-p-100 text-center">
        <div className="project-wraper">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img1} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>automated machine systems</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img2} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>bridge making technology</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img3} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>gas energy saving system</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img4} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>latest welding technology</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-20"></div>

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img5} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>future architecture ideas</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img6} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>reusable power system</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img7} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>gas saving system</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="single-project">
                  <img src={img8} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>best talented engineer</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-50"></div>
        <div
          className="tractour-pagination"
          aria-label="page navigation example"
        >
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa fa-long-arrow-left"></i>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects3;
