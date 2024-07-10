import React from "react";
import ProgressBar from "react-animated-progress-bar";
const Progress = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="progress-bar-wrape">
          <div className="progress-box">
            <h4>constraction skill</h4>
            <ProgressBar
              width="100%"
              height="16px"
              rect
              fontColor="#222"
              percentage="90"
              rectBorderRadius="0"
              trackPathColor="transparent"
              backgroundColor="#000"
              trackBorderColor="#ccc"
              hollowBackgroundColor="#000"
            />
          </div>

          <div className="progress-box">
            <h4>oil engineering</h4>

            <ProgressBar
              width="100%"
              height="16px"
              rect
              fontColor="#222"
              percentage="70"
              rectBorderRadius="0"
              trackPathColor="transparent"
              backgroundColor="#000"
              trackBorderColor="#ccc"
              hollowBackgroundColor="#000"
            />
          </div>

          <div className="progress-box">
            <h4>soil test skill</h4>

            <ProgressBar
              width="100%"
              height="16px"
              rect
              fontColor="#222"
              percentage="95"
              rectBorderRadius="0"
              trackPathColor="transparent"
              backgroundColor="#000"
              trackBorderColor="#ccc"
              hollowBackgroundColor="#000"
            />
          </div>

          <div className="progress-box">
            <h4>gas engineering</h4>

            <ProgressBar
              width="100%"
              height="16px"
              rect
              fontColor="#222"
              percentage="80"
              rectBorderRadius="0"
              trackPathColor="transparent"
              backgroundColor="#000"
              trackBorderColor="#ccc"
              hollowBackgroundColor="#000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
