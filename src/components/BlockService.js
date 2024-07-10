import React from "react";
import img1 from "../img/blocks/blocks-1.jpg";
import img2 from "../img/blocks/blocks-2.jpg";
import img3 from "../img/blocks/blocks-3.jpg";
import img4 from "../img/blocks/blocks-4.jpg";
import img5 from "../img/blocks/blocks-5.jpg";
import img6 from "../img/blocks/blocks-6.jpg";
const BlockService = () => {
  return (
    <>
      <div className="blocks-services-area text-center sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img1} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">welding machine using</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img2} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">new compost technology</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img3} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">new welding machine</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="spacer-30"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img4} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">gas liquid chromatography</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img5} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">welding fireworks technology</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blocks-services">
                <div className="single-blocks-img">
                  <img src={img6} alt="block-img" className="img-fluid" />
                </div>
                <h3>
                  <a href="#">granite marble technology</a>
                </h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demor
                </p>
                <a href="#" className="btn">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockService;
