import React from "react";
import sepimg from "../img/separ-logo.png";
import img1 from "../img/blog/blog-1.jpg";
import img2 from "../img/blog/blog-2.jpg";
import img3 from "../img/blog/blog-3.jpg";
import img4 from "../img/blog/blog-4.jpg";
import img5 from "../img/blog/blog-5.jpg";
import img6 from "../img/blog/blog-6.jpg";
import { Link } from "react-router-dom";
const Blogshort = () => {
  return (
    <>
      <div className="blog-area pb-85">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="section-title text-center mb-70">
                <h2>blog area</h2>
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
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img1} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">january 01, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">industrial revolution factory</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img2} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">march 11, 2018</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">our genius engineer</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img3} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">December 10, 2011</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">technical solution consultant</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-15"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img4} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">December 05, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">main compost machine</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img5} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">septembor 14, 2020</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">gas plant operator</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img6} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">january 17, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="">welding machine use</Link>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy text ever since is the 1500 an unknown printer took a
                    text ever since is the 1500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogshort;
