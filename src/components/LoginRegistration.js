import React from "react";

const LoginRegistration = () => {
  return (
    <>
      <div className="register-login-area sec-p-100 bg-color3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mayabi-register-area">
                <div className="cart-title mb-20">
                  <h2>register here</h2>
                </div>
                <form action="#" className="registration-form">
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name*"
                      name="name"
                      required
                    />
                    <span>
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Emai Address*"
                      name="email"
                      required
                    />
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter Password"
                      name="name"
                      required
                    />
                    <span>
                      <i className="fa fa-unlock-alt"></i>
                    </span>
                  </div>
                  <button className="btn btn-type-3">register here</button>
                  <p>* You must be registered to submit content.</p>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mayabi-login-area">
                <div className="cart-title mb-20">
                  <h2>login here</h2>
                </div>
                <form action="#" className="registration-form">
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name*"
                      name="name"
                      required
                    />
                    <span>
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Emai Address*"
                      name="email"
                      required
                    />
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <div className="single-field mb-30">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter Password"
                      name="name"
                      required
                    />
                    <span>
                      <i className="fa fa-unlock-alt"></i>
                    </span>
                  </div>
                  <button className="btn btn-type-3">login now</button>
                  <a href="#">*Lost your password?</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegistration;
