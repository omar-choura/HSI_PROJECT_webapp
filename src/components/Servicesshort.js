import React from "react";
import { Link } from "react-router-dom";

const Servicesshort = () => {
  return (
    <>
      <div className="services-area sec-p-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-services-wraper border-bottom">
                <div className="services-icon">
                  <i className="flaticon-oil"></i>
                </div>
                <div className="services-content">
                  <h4>energy & utilities</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-services-wraper border-bottom">
                <div className="services-icon">
                  <i className="flaticon-internet"></i>
                </div>
                <div className="services-content">
                  <h4>internet of things</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-services-wraper border-bottom">
                <div className="services-icon">
                  <i className="flaticon-chip"></i>
                </div>
                <div className="services-content">
                  <h4>artificial intelligence</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-services-wraper">
                <div className="services-icon">
                  <i className="flaticon-atom"></i>
                </div>
                <div className="services-content">
                  <h4>worldwide provider</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-services-wraper">
                <div className="services-icon">
                  <i className="flaticon-medal"></i>
                </div>
                <div className="services-content">
                  <h4>25+ best company awards</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single-services-wraper">
                <div className="services-icon">
                  <i className="flaticon-idea"></i>
                </div>
                <div className="services-content">
                  <h4>best idea for evar</h4>
                  <p>
                    I must explain to you how all this idea of denouncing
                    pleasure and praising
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="" className="btn btn-type-3 mt-30">
          see more <i className="fa fa-long-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Servicesshort;
