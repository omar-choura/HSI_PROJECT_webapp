import React from "react";
import Video from "./Video";
import Accordian from "./Accordian";

const VideoAccordian = () => {
  return (
    <>
      <div className="video-and-accordian-area sec-p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Video />
            </div>
            <div className="col-md-6">
              <Accordian />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAccordian;
