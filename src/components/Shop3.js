import React from "react";
import img1 from "../img/shop/product-1.jpg";
import img2 from "../img/shop/product-2.jpg";
import img3 from "../img/shop/product-3.jpg";
import img4 from "../img/shop/product-4.jpg";
import img5 from "../img/shop/product-5.jpg";
import img6 from "../img/shop/product-6.jpg";
import img7 from "../img/shop/product-7.jpg";
import img8 from "../img/shop/product-8.jpg";
import img9 from "../img/shop/product-9.jpg";
import { Link } from "react-router-dom";
const Shop3 = () => {
  return (
    <>
      <div className="shop-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sho-result float-left">
                <p>showing 1-8 of 12 results</p>
              </div>

              <div className="short-by float-right">
                <select name="select" className="trac-shop-select">
                  <option>sort by popularity</option>
                  <option>short by price:</option>
                  <option>short by name:</option>
                  <option>short by date:</option>
                </select>
              </div>
            </div>
          </div>
          <div className="spacer-20"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img1} alt="product" className="img-fluid" />
                  </Link>

                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="new">new</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      yellow smart watch
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$88</del>
                    $70.89
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img2} alt="product" className="img-fluid" />
                  </Link>

                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="new">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      green protecting musk
                    </Link>
                  </h4>
                  <div className="product-price">$44.89</div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img3} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      single leg shocks
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$88</del>
                    $70.89
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-30"></div>

          <div className="row">
            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img4} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      black dslr camera
                    </Link>
                  </h4>
                  <div className="product-price">$10.00</div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img5} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="new">-50%</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      single paper cup
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$5</del>
                    $10.00
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img6} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      white smart watch
                    </Link>
                  </h4>
                  <div className="product-price">$77.09</div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-30"></div>

          <div className="row">
            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img7} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      smart drone with camera
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$88</del>
                    $65.89
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img8} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      big screen mobile phone
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$88</del>
                    $70.89
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-product-wrap text-center">
                <div className="product-img">
                  <Link href="">
                    <img src={img9} alt="product" className="img-fluid" />
                  </Link>
                  <ul className="product-action">
                    <li>
                      <Link to="">
                        <i className="fa fa-cart-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="sale-tag">
                    <span className="new">-50%</span>
                    <span className="sale">off</span>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="" className="product-title">
                      single travelling bag
                    </Link>
                  </h4>
                  <div className="product-price">
                    <del>$88</del>
                    $70.89
                  </div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
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
                <Link className="page-link" to="">
                  <i className="fa fa-long-arrow-left"></i>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  <i className="fa fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop3;
