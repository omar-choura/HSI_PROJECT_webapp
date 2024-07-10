import React from "react";
import img10 from "../img/blog/blog-10.jpg";
import img11 from "../img/blog/blog-11.jpg";
import img12 from "../img/blog/blog-12.jpg";
import img13 from "../img/blog/blog-13.jpg";
import img14 from "../img/blog/blog-14.jpg";
import img15 from "../img/blog/blog-15.jpg";
const BlogCol2 = () => {
  return (
    <>
      <div className="blog-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img10} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">septembor 14, 2020</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">gas plant operator</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img11} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">jun 19, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">new compost technology</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
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
                  <img src={img12} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">march 02, 2011</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">welding machine use</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img13} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">January 01, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">industrial revolution factory</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
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
                  <img src={img14} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">March 11, 2018</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">our genius engineer</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-blog">
                <div className="img-date-wrape">
                  <img src={img15} alt="blog-img" className="img-fluid" />
                  <div className="blog-date">December 10, 2019</div>
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="#">our best information for you</a>
                  </h3>
                  <span></span>
                  <p>
                    industry. Lorem Ipsum has been the ever a industry standard
                    dummy an text ever since is the 1500 an unknown printer took
                    a text ever since is a the 1500industry. Lorem Ipsum has
                    been the ever a industry standard th dummy text ever since
                    is the 1500 an
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
      </div>
    </>
  );
};

export default BlogCol2;
