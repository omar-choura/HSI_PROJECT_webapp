import React from "react";

const Accordian = () => {
  return (
    <>
      <div className="tractour-accordian-wrapeer">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="tractor-heading1">
              <a
                href="#"
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                How Can We Work?
              </a>
            </div>

            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="tractor-heading1"
              data-parent="#accordion"
            >
              <div className="card-body">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galle of type
                and scrambled it to make a type book. It h as survived not only
                five centuries, but also the leap into ele ctronic typesetting,
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="tractor-heading2">
              <a
                href="#"
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                payment system
              </a>
            </div>
            <div
              id="collapse2"
              className="collapse"
              aria-labelledby="tractor-heading2"
              data-parent="#accordion"
            >
              <div className="card-body">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galle of type
                and scrambled it to make a type book. It h as survived not only
                five centuries, but also the leap into ele ctronic typesetting,
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="tractor-heading3">
              <a
                href="#"
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                24/7 supports online
              </a>
            </div>
            <div
              id="collapse3"
              className="collapse"
              aria-labelledby="tractor-heading3"
              data-parent="#accordion"
            >
              <div className="card-body">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galle of type
                and scrambled it to make a type book. It h as survived not only
                five centuries, but also the leap into ele ctronic typesetting,
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="tractor-heading4">
              <a
                href="#"
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                bug fixing
              </a>
            </div>
            <div
              id="collapse4"
              className="collapse"
              aria-labelledby="tractor-heading4"
              data-parent="#accordion"
            >
              <div className="card-body">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galle of type
                and scrambled it to make a type book. It h as survived not only
                five centuries, but also the leap into ele ctronic typesetting,
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
