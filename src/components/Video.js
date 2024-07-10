import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import img1 from "../img/video/video-bg.jpg";
const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="snvzakfcTmY"
        onClose={() => setOpen(false)}
      />
      <div className="tractour-video-area">
        <img src={img1} alt="img-1" className="img-fluid" />
        <div className="video-hvr">
          <div className="video-view" onClick={() => setOpen(true)}>
            <i className="fa fa-play-circle"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
