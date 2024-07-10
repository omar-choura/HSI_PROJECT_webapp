import React from "react";
import img9 from "../img/project/project-9.jpg";
import img10 from "../img/project/project-10.jpg";
import img11 from "../img/project/project-11.jpg";
import img12 from "../img/project/project-12.jpg";
import img13 from "../img/project/project-13.jpg";
import img14 from "../img/project/project-14.jpg";
import img15 from "../img/project/project-15.jpg";
import img16 from "../img/project/project-16.jpg";
const Projects2 = () => {
  return (
    <>
      <div className="project-area sec-p-100 text-center">
        <div className="project-wraper">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-project">
                  <img src={img9} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>multi energy saving system</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-project">
                  <img src={img10} alt="project-img" className="img-fluid" />
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

              <div className="col-md-4">
                <div className="single-project">
                  <img src={img11} alt="project-img" className="img-fluid" />
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
            <div className="spacer-20"></div>
            <div className="row">
              <div className="col-md-8">
                <div className="single-project">
                  <img src={img12} alt="project-img" className="img-fluid" />
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

              <div className="col-md-4">
                <div className="single-project">
                  <img src={img13} alt="project-img" className="img-fluid" />
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
              <div className="col-md-4">
                <div className="single-project">
                  <img src={img14} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>new compost technology</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-project">
                  <img src={img15} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>sea oil and gas technology</h3>
                    </a>
                    <a className="btn" href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-project">
                  <img src={img16} alt="project-img" className="img-fluid" />
                  <div className="project-hvr">
                    <a href="#">
                      <h3>multi energy saving system</h3>
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

export default Projects2;
