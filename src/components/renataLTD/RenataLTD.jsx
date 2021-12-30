import React from "react";
import images from "../../images/AllExports";
import "./renataltd.scss";

const RenataLTD = () => {
  return (
    <>
      <section className="renataltd" id="renataltd">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="renatalHead">
                <img src={images.renatalLogo} alt="" className="img" />
                <h2>RENATA LTD.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="renataText">
                <p>
                  Renata Limited (formerly Pfizer Limited) is the 4th largest
                  pharmaceutical company in Bangladesh and one of the leading
                  and fastest-growing pharmaceutical and animal health product
                  companies in the country. Renata’s uniqueness lies in its
                  devotion to the alleviation of poverty, access to quality
                  healthcare, and increasing financial inclusion through its
                  majority shareholder Sajida Foundation and Business Research
                  International Corporation Inc (BRIC).
                  <br />
                  <br />
                  The company started its operations in 1972 as Pfizer
                  (Bangladesh) Limited and transferred the ownership of its
                  Bangladesh operations in 1993 to local shareholders, at which
                  point the company’s name was changed to Renata Limited. The
                  Company employs 75 pharmacists, 15 doctors, 25 chemists, 15
                  microbiologists, 25 engineers, 370 skilled manufacturing
                  staff, and about 1500 professional representatives. Renata has
                  a current annual expected turnover of around USD 350 million
                  in 2021, and a projected annual growth of 20%.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlayImages">
          <img
            className="img-fluid renatalov1"
            src={images.renatalov1}
            alt=""
          />
          <img
            className="img-fluid renatalov2"
            src={images.renatalov2}
            alt=""
          />
          <img
            className="img-fluid renatalov3"
            src={images.renatalov2}
            alt=""
          />
          <img
            className="img-fluid renatalov4"
            src={images.renatalov3}
            alt=""
          />
        </div>
      </section>
      <div className="keyManagment pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="keyText py-3">
                <h4 style={{ fontSize: "36px", fontWeight: "800" }}>
                  Key Management
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenataLTD;
