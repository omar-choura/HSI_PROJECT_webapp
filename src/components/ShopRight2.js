import React from "react";
import ShopWidget from "./ShopWidget";
import img1 from "../img/shop/product-1.jpg";
import img2 from "../img/shop/product-2.jpg";
import img4 from "../img/shop/product-4.jpg";
import img5 from "../img/shop/product-5.jpg";
import img8 from "../img/shop/product-8.jpg";
import img9 from "../img/shop/product-9.jpg";
import img10 from "../img/shop/product-10.jpg";
const ShopRight2 = () => {
  return (
    <>
      <div className="shop-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="sho-result float-left">
                    <p>showing 1-8 of 12 results</p>
                  </div>

                  <div className="short-by float-right">
                    <select name="select" className="trac-shop-select">
                      <option value="01">sort by popularity</option>
                      <option value="01">short by price:</option>
                      <option value="01">short by name:</option>
                      <option value="01">short by date:</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="spacer-20"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img1} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">new</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          yellow smart watch
                        </a>
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

                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img2} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="sale">sale</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          green protecting musk
                        </a>
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
              </div>
              <div className="spacer-30"></div>

              <div className="row">
                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img4} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          smart drone with camera
                        </a>
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

                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img5} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">-50%</span>
                        <span className="sale">sale</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          single paper cup
                        </a>
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
              </div>
              <div className="spacer-30"></div>

              <div className="row">
                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img8} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">new</span>
                        <span className="sale">sale</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          big screen mobile phone
                        </a>
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

                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img8} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">-50%</span>
                        <span className="sale">off</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          single travelling bag
                        </a>
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
                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img9} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">new</span>
                        <span className="sale">sale</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          big screen mobile phone
                        </a>
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

                <div className="col-md-6">
                  <div className="single-product-wrap text-center">
                    <div className="product-img">
                      <a href="">
                        <img src={img10} alt="product" className="img-fluid" />
                      </a>
                      <ul className="product-action">
                        <li>
                          <a href="#">
                            <i className="fa fa-cart-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="sale-tag">
                        <span className="new">-50%</span>
                        <span className="sale">off</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <a href="#" className="product-title">
                          single travelling bag
                        </a>
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

            <ShopWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRight2;
