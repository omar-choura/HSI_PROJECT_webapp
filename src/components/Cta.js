import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <div className="callto-action-area sec-p-100 cta-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="callto-action-content float-left">
                <h3>Looking for a reliable & stable partner?</h3>
                <p>contact us & learn more about us</p>
              </div>
              <Link to="" className="btn btn-type-4 float-right">
                contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
