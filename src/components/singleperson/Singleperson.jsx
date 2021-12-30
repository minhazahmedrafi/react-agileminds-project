import React from "react";
import images from "../../images/AllExports";
import "./singleperson.scss";
const Singleperson = () => {
  return (
    <>
      <section className="singleperson">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="personImg">
                <img
                  className="img-fluid w-100"
                  src={images.singleperson1}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="persontInfo">
                <div className="personHead">
                  <h2 className="name">MR. M Nayeem Hossain</h2>
                  <p
                    className="title"
                    style={{ fontSize: "12px", color: "#A7A7A7" }}
                  >
                    VICE CHAIRMAN OF AGILE MINDS <br /> CORPORATION COUNTRY
                    MANAGER OF BRIC
                  </p>
                </div>
                <div className="personText">
                  <p>
                    Mr. Hossain is a seasoned first-generation entrepreneur with
                    two decades of experience in senior positions of various
                    multinational companies, including Sanofi Aventis, Novartis,
                    British American Tobacco, and the UNDP. <br /> During his
                    tenure in UNDP, Mr. Hossain's management portfolio includes
                    beneficiaries such as the Prime Minister's Office,
                    Bangladesh Police Headquarters, and many key government
                    ministries. <br /> He is also the Chairman of the Unitas
                    Group and the President of the Bangladesh Foreign Employment
                    Council - BFEC. BFEC works under the direct leadership of
                    the Honorable Foreign Minister Dr. AK Abdul Momen, the Chief
                    patron of BFEC. Under the leadership & guidance of Dr.
                    Momen, BFEC aims to increase the foreign remittance of our
                    country to USD 100 billion per year.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="singleperson singleperson2">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-9">
              <div className="persontInfo text-end">
                <div className="personHead">
                  <h2 className="name">MD. Abdur Rauf</h2>
                  <p
                    className="title"
                    style={{ fontSize: "12px", color: "#A7A7A7" }}
                  >
                    CFO, Agile Minds Corp.
                  </p>
                </div>
                <div className="personText">
                  <p>
                    Md. Abdur Rauf is one of Bangladesh's most talented young
                    finance professionals. He gained hands-on experience in
                    developing and managing diversified businesses portfolio.
                    During his 14+ years of professional career, he led the
                    finance & accounts team of some top-notch companies in
                    Bangladesh, i.e., "Rahimafrooz (Bangladesh) Ltd," Energypac
                    Electronics Ltd, Aman Group Ltd, etc. He is currently
                    supporting the group's growth as the "Chief Financial
                    Officer" with his brilliance, tenacity, hard work, and
                    leadership. Mr. Rauf is an MBA from IBA, University of
                    Dhaka.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="personImg">
                <img
                  className="img-fluid w-100"
                  src={images.singleperson2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singleperson;
