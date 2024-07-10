import React from "react";

const Headertop = () => {
  return (
    <>
      <div className="header-top-area bg-color1 text-center sec-p-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tractor-lang float-left">
                <select name="select" id="lang-typ" className="tractor-lang">
                
                <option>francais</option>
                <option>anglais</option>
                

                </select>
              </div>

              <ul className="header-top-social">
                <li>
                  <a href="https://www.facebook.com/people/Hassairi-Steel-Industry/100041995063503/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/in/houssem-hassairi-468b7b85/?originalSubdomain=tn">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hassairisteelindustry/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

              </ul>
              <div className="quote-btn float-right">
                <a href="#" className="btn btn-type-4">
                  get a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headertop;
