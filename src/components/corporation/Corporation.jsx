import React from "react";
import images from "../../images/AllExports";
import "./corporation.scss";

const Corporation = () => {
  return (
    <>
      <section className="corporation" id="corporation">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="corpoLeft">
                <div className="corpoImage">
                  <img
                    className="img-fluid"
                    src={images.corporation01}
                    alt=""
                  />
                  <div className="innerLogo">
                    <img
                      className="img-fluid"
                      src={images.corporation02}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="corpoRight">
                <div className="secHeader">
                  <h2>
                    AGILE MINDS <br /> CORPORATION
                  </h2>
                  <p>INTRODUCING</p>
                </div>
                <div className="corpoContent">
                  <p>
                    Agile Minds Corporation (“AMC”) is a Bangladeshi company
                    founded in 2020. It aims to bring advances, innovation, and
                    investments to the country by uniting over a dozen companies
                    and their resources, together with private, institutional,
                    and NGO investors such as the WHO, IFC, DFP, and the UNDP.
                    <br /> <br />
                    AMC houses centralized finance, accountancy, HR, and
                    procurement departments, that maintain high standards and
                    transparency throughout the companies’ projects and
                    activities.
                    <br /> <br />
                    AMC further acts as a unified information base and
                    processor, reporting on the status, health, and direction of
                    each business and setting targets, key performance
                    indicators, and overall strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row corpoBottom d-flex align-items-center">
            <div className="col-lg-6">
              <div className="corpoRight">
                <div className="secHeader">
                  <h2>BUSINESS RESEARCH INTERNATIONAL CORPORATION INC.</h2>
                  <p>INTRODUCING</p>
                </div>
                <div className="corpoContent">
                  <p>
                    Business Research International Corporation Inc. (BRIC) is
                    an investment company founded in 1987, primarily engaged in
                    Public Equity and direct investments across multiple
                    industries and markets.
                    <br />
                    <br />
                    Its current global portfolio holdings are valued at
                    approximately USD400 million, and investments include a
                    21.8% stake in Renata Ltd. (formerly Pfizer Laboratories
                    Bangladesh Ltd), one of the largest pharmaceutical companies
                    in Bangladesh, listed in the Dhaka Stock Exchange, with a
                    market capitalization of approximately USD1.6 billion.
                    <br />
                    <br />
                    BRIC also owns a 15% stake in a leading outsourcing company
                    called BGLOBAL and a 10% stake in DIRECT FRESH, a food
                    distribution, Agro, and grocery e-commerce company. BRIC’s
                    banking relationships include Swiss bankers such as Julius
                    Baer and Pictet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="corpoLeft">
                <div className="corpoImage">
                  <img
                    className="img-fluid"
                    src={images.corporation03}
                    alt=""
                  />
                  <div className="innerLogo">
                    <img
                      className="img-fluid"
                      src={images.corporation04}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Corporation;
