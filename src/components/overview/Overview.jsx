import React from "react";
import "./overview.scss";
import { FiPlay } from "react-icons/fi";
import images from "../../images/AllExports";

const Overview = () => {
  return (
    <>
      <section className="overview" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="overviewContent">
                <a href="#" className="ovIcon">
                  <FiPlay className="playIcon" />
                </a>
                <div className="ovbtn">
                  <a href="#">Intro Video</a>
                </div>

                <div className="headline">
                  <h1>
                    Our Latest Insights <br /> & Overview.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overviewOverlay">
          <img className="ov1" src={images.ov1} alt="" />
          <img className="ov2" src={images.ov2} alt="" />
          <img className="ov3" src={images.ov3} alt="" />
          <img className="ov4" src={images.ov4} alt="" />
          <img className="ov5" src={images.ov5} alt="" />
          <img className="ov6" src={images.ov6} alt="" />
        </div>
      </section>
    </>
  );
};

export default Overview;
