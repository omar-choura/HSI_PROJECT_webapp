import React from "react";
import CountUp from "react-countup";

const Counterup = () => {
  return (
    <>
      <div className="counter-area sec-p-100 counter-bg text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="single-counter">
                <i className="fa fa-thumbs-o-up"></i>
                <div className="counter">
                  <CountUp start={0} end={270} duration={2.75} />
                </div>
                <div className="count-name">projects done</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="single-counter">
                <i className="fa fa-globe"></i>
                <div className="counter">
                  <CountUp start={0} end={400} duration={2.75} />
                </div>
                <div className="count-name">across worldwide</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="single-counter">
                <i className="fa fa-trophy"></i>
                <div className="counter">
                  <CountUp start={0} end={690} duration={2.75} />
                </div>
                <div className="count-name">awards winning</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="single-counter">
                <i className="fa fa-heart"></i>
                <div className="counter">
                  <CountUp start={0} end={100} duration={2.75} />
                </div>
                <div className="count-name">satisfied customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counterup;
