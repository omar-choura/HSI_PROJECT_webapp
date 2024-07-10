import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <>
      <div className="tractour-breadcroumb breadcroumb-bg text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{props.name}</h2>
              <h4>
                <Link to="">Home</Link> / {props.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
