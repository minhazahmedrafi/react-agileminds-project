import React from "react";
import images from "../../images/AllExports";
import "./bricfounder.scss";

const BricFounders = () => {
  return (
    <>
      <section className="bricFounder" id="bricFounder">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bricHead">
                <span>Meet</span>
                <div className="nameTitle">
                  <h4>Iftekhar Karim</h4>
                  <p>Founder of BRIC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row founder01">
            <div className="col-12">
              <div className="founderInfo">
                <div className="founderText">
                  <p>
                    Mr. Iftekhar Karim is an experienced global and local
                    early-stage private equity investor with over 50 years of
                    experience spanning Europe, Asia, and Africa.
                    <br />
                    <br />
                    He started his career in 1966 as an articled clerk in a
                    UK-based chartered accountant's firm. He joined Grindlays
                    Bank Ltd. (Now Standard Chartered Bank) in 1970, where he
                    worked in various capacities in the Dhaka, London, and
                    Kolkata offices.
                    <br />
                    <br />
                    In 1976 he was awarded a Post Graduate IRI Fellowship by the
                    Italian Government to research the Italian Banking System.
                    He joined Bank of Credit and Commerce International and
                    worked in various managerial positions in Dhaka, Tokyo,
                    London, Paris, Tunisia, and Kinshasa.
                    <br />
                    <br />
                    In 1977 Mr. Karim became an Associate of The Chartered
                    Institute of Bankers (England and Wales) ACIB and continued
                    at Bank of Credit and Commerce International. Several years
                    later, in 1985, Mr. Karim became the First High Commissioner
                    of The People's Republic of Bander Seri Begawan, Bangladesh,
                    to Brunei. This was followed by his appointment as a member
                    of the Bangladesh Delegation to the UN General Assembly in
                    1986. Ambassador Iftekhar Karim is now retired and has left
                    oversight of operations and management of BRIC to his son
                    Mishal Karim.
                  </p>
                </div>
                <div className="founderImg">
                  <img src={images.founder01} alt="" />
                  <div className="ovBorder">
                    <svg
                      width="263"
                      height="476"
                      viewBox="0 0 263 476"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M137 2H2.5V473.5H261"
                        stroke="url(#paint0_linear_15_9)"
                        stroke-width="4"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_15_9"
                          x1="469.312"
                          y1="1387.62"
                          x2="-1308.77"
                          y2="-128.944"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EF4D84" />
                          <stop offset="1" stop-color="#F47929" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bricFounder founder02" id="bricFounder">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bricHead">
                <span>Meet</span>
                <div className="nameTitle">
                  <h4>Mishal Karim</h4>
                  <p>
                    FOUNDER AND CHAIRMAN OF AGILE MINDS CORP <br /> VICE
                    PRESIDENT & DIRECTOR OF BRIC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row founder02Content">
            <div className="col-12">
              <div className="founderInfo">
                <div className="founderImg">
                  <img src={images.founder02} alt="" />
                  <div className="ovBorder">
                    <svg
                      width="263"
                      height="476"
                      viewBox="0 0 263 476"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M126 2H260.5V473.5H2"
                        stroke="url(#paint0_linear_15_15)"
                        stroke-width="4"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_15_15"
                          x1="-206.312"
                          y1="1387.62"
                          x2="1571.77"
                          y2="-128.944"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EF4D84" />
                          <stop offset="1" stop-color="#F47929" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="founderText">
                  <p>
                    A seasoned, dynamic, and well-rounded investor and venture
                    builder with over 20 years of progressive experience. Mr.
                    Mishal Karim is an expert in launching companies and
                    assisting their growth through capital acquisition, growth
                    strategies, new verticals, and geographical expansion.
                    <br /> <br />
                    ​​Investments include Construction, Renewable Energy, Land
                    Reclamation and Preparation, Data Analytics, Fintech,
                    Digital Marketing, Food Retail and Distribution,
                    Hospitality, Restaurants, E-commerce, and Medical supplies.
                    <br /> <br />
                    Being the eldest grandson of an iconic legacy politician as
                    the Late Humayun Rasheed Choudhury (HRC), whose career
                    started with an illustrious stint in the foreign service and
                    then later became Speaker of the Parliament, Peoples
                    Republic of Bangladesh, opened several doors for Mishal. Yet
                    Mr. Karim chose to dedicate the last twenty years to build
                    up various companies that have both social and economic
                    upside.
                    <br />
                    <br />
                    Like his grandfather, Mishal Karim has deep patriotic ties
                    to his country and holds the desire to give back to various
                    CSR initiatives and charitable foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BricFounders;
