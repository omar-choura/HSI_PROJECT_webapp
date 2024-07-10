import React from "react";
import tabimg1 from "../img/tab/tab-img.jpg";

const Tab = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="tractor-tabs-wraper">
          <ul className="nav nav-tabs" id="tractortab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="Service-tab"
                data-toggle="tab"
                href="#service1"
                role="tab"
                aria-controls="service1"
                aria-selected="true"
              >
                Service Pack 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="Service-tab2"
                data-toggle="tab"
                href="#service2"
                role="tab"
                aria-controls="service2"
                aria-selected="false"
              >
                Service Pack 2
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="Service-tab3"
                data-toggle="tab"
                href="#service3"
                role="tab"
                aria-controls="service3"
                aria-selected="false"
              >
                Service Pack 3
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="Service-tab4"
                data-toggle="tab"
                href="#service4"
                role="tab"
                aria-controls="service4"
                aria-selected="false"
              >
                Service Pack 4
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tractorcontent">
            <div
              className="tab-pane fade show active"
              id="service1"
              role="tabpanel"
              aria-labelledby="Service-tab"
            >
              <div className="tractor-tabs-content">
                <div className="tractor-tabs-img">
                  <img src={tabimg1} alt="tab-img" className="img-fluid" />
                </div>
                <div className="tractor-tabs-details">
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
                  </p>
                  <p>
                    took a galley of type and scrambled it to make a type
                    specimensimply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="service2"
              role="tabpanel"
              aria-labelledby="Service-tab2"
            >
              <div className="tractor-tabs-content">
                <div className="tractor-tabs-details">
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
                  </p>
                  <p>
                    took a galley of type and scrambled it to make a type
                    specimensimply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="service3"
              role="tabpanel"
              aria-labelledby="Service-tab3"
            >
              <div className="tractor-tabs-content">
                <div className="tractor-tabs-img">
                  <img src={tabimg1} alt="tab-img" className="img-fluid" />
                </div>
                <div className="tractor-tabs-details">
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
                  </p>
                  <p>
                    took a galley of type and scrambled it to make a type
                    specimensimply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="service4"
              role="tabpanel"
              aria-labelledby="Service-tab4"
            >
              <div className="tractor-tabs-content">
                <div className="tractor-tabs-img">
                  <img src={tabimg1} alt="tab-img" className="img-fluid" />
                </div>
                <div className="tractor-tabs-details">
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
                  </p>
                  <p>
                    took a galley of type and scrambled it to make a type
                    specimensimply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the
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

export default Tab;
