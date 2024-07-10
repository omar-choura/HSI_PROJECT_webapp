import React from "react";
import Map from "./Map";

const Contactinfo = () => {
  return (
    <>
      <div className="contactus-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Map />
            </div>
            <div className="col-md-6">
              <div className="contact-info-detail">
                <h2>more information</h2>
                <p>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <ul className="contact-text-info">
                  <li>
                    <strong>
                      <span>
                        <i className="fa fa-map-marker"></i>
                      </span>{" "}
                      location
                    </strong>
                    <p>BK road 123 jessore js, chowrasta</p>
                  </li>

                  <li>
                    <strong>
                      <span>
                        <i className="fa fa-envelope"></i>
                      </span>{" "}
                      email
                    </strong>
                    <p>
                      tractour@info.ca
                      <br /> www.tractour-info.ca
                    </p>
                  </li>
                  <li>
                    <strong>
                      <span>
                        <i className="fa fa-phone"></i>
                      </span>{" "}
                      call us
                    </strong>
                    <p>
                      +880-121-345-678 <br /> +880-121-345-678
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center pt-50">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <textarea
                    className="form-control"
                    name="message"
                    cols="30"
                    rows="8"
                    placeholder="Request"
                  ></textarea>
                  <button type="submit" className="btn btn-type-3">
                    submit request
                  </button>
                </form>
                <p className="form-message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
