import React from "react";
import tabimg1 from "../img/tab/tab-img.jpg";
import Tab from "./Tab";
import Progress from "./Progress";
const ProgressTab = () => {
  return (
    <>
      <div className="progress-tab-area sec-p-100">
        <div className="container">
          <div className="row">
            <Progress />
            <Tab />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressTab;
