import React from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <>
      <div className="quote-sologan-area sec-p-100 text-center bg-color3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>delivering innovation sustainability goals.</h2>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment
              </p>
              <Link to="" className="btn btn-type-3 mt-30">
                get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
