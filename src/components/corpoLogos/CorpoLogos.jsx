import React from "react";
import images from "../../images/AllExports";
import "./corpologos.scss";

const CorpoLogos = () => {
  return (
    <>
      <section className="corpoLogos" id="corpoLogos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="corpoLogoHead">
                <h4>AGILE MINDS CORP.</h4>
                <a href="#">Ventures</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5">
              <div className="corpoSecurity leftSec">
                <div className="rotateHead">
                  <h4>Construction, Dredging & Security</h4>
                </div>
                <div className="compactLogo">
                  <img className="img-fluid" src={images.cLogo01} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="corpoSecurity rightSec">
                <div className="rotateHead">
                  <h4>Food & Healthcare</h4>
                </div>
                <div className=" allLogos">
                  <div className="row">
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo02} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo03} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo04} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo05} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo06} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo07} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo08} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo09} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo10} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bottomLogos">
            <div className="col-xl-5">
              <div className="corpoSecurity rightSec rightSec2">
                <div className="rotateHead">
                  <h4>Food & Healthcare</h4>
                </div>
                <div className=" allLogos">
                  <div className="row">
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo11} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo12} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo13} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo14} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo15} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo16} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="corpoSecurity rightSec rightSec3">
                <div className="rotateHead">
                  <h4>Food & Healthcare</h4>
                </div>
                <div className=" allLogos">
                  <div className="row">
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo17} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo18} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo19} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="corpoSecurity rightSec rightSec4">
                <div className="rotateHead">
                  <h4>Food & Healthcare</h4>
                </div>
                <div className=" allLogos lastLogos">
                  <div className="row">
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo20} alt="" />
                    </div>
                    <div className="singleImg">
                      <img className="img-fluid" src={images.cLogo21} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlayAll">
          <img className="img-fluid overlay01" src={images.overlay01} alt="" />
          <img className="img-fluid overlay02" src={images.overlay02} alt="" />
          <img className="img-fluid overlay03" src={images.overlay03} alt="" />
          <img className="img-fluid overlay04" src={images.overlay04} alt="" />
          <img className="img-fluid overlay05" src={images.overlay05} alt="" />
          <img className="img-fluid overlay06" src={images.overlay06} alt="" />
          <img className="img-fluid overlay07" src={images.overlay07} alt="" />
          <img className="img-fluid overlay08" src={images.overlay08} alt="" />
          <img className="img-fluid overlay09" src={images.overlay09} alt="" />
        </div>
      </section>
    </>
  );
};

export default CorpoLogos;
