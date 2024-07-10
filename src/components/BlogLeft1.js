import React from "react";
import Widget from "./Widget";
import img1 from "../img/blog/blog-1.jpg";
import img2 from "../img/blog/blog-2.jpg";
import img4 from "../img/blog/blog-4.jpg";
import img5 from "../img/blog/blog-5.jpg";
import img7 from "../img/blog/blog-7.jpg";
import img8 from "../img/blog/blog-8.jpg";
const BlogLeft1 = () => {
  return (
    <>
      <div className="blog-area sec-p-100">
        <div className="container">
          <div className="row">
            <Widget />
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img1} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img2} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-15"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img4} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img5} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer-15"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img7} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="img-date-wrape">
                      <img src={img8} alt="" className="img-fluid" />
                      <div className="blog-date">December 10, 2019</div>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">our best information for you</a>
                      </h3>
                      <span></span>
                      <p>
                        industry. Lorem Ipsum has been the ever a industry
                        standard dummy text ever since is the 1500 an unknown
                        printer took a text ever since is the 1500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-50"></div>
              <div
                className="tractour-pagination"
                aria-label="page navigation example"
              >
                <ul className="pagination justify-content-left">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeft1;
