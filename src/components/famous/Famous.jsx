import React from "react";
import images from "../../images/AllExports";
import "./famous.scss";

const Famous = () => {
  return (
    <>
      <section className="famous" id="famous">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8">
              <div className="leftContent">
                <h1>
                  Our Famous <br /> Origins
                </h1>
                <div className="leftDetails pt-5">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Our Vission
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Our Value
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-3">
                          <div className="personImg">
                            <img
                              className="img-fluid w-100"
                              src={images.famous2}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="persontInfo">
                            <div className="personText">
                              <p>
                                In Asia, a person’s family and origins go a long
                                way to establish credibility. Mishal Karim’s
                                iconic grandfather was the Late Humayun Rasheed
                                Choudhury [HRC]. <br />
                                HRC was posted as a young officer of the foreign
                                service of Bangladesh to the then Pakistani High
                                Commission in India. When West Pakistan and East
                                Pakistan engaged in the liberation war, HRC
                                defected and became the Head of the liberation
                                movement in India. He developed a special
                                relationship with the Indian Prime Minister,
                                Indira Gandhi.
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-3">
                          <div className="personImg">
                            <img
                              className="img-fluid w-100"
                              src={images.famous2}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="persontInfo">
                            <div className="personText">
                              <p>
                                In Asia, a person’s family and origins go a long
                                way to establish credibility. Mishal Karim’s
                                iconic grandfather was the Late Humayun Rasheed
                                Choudhury [HRC]. <br />
                                HRC was posted as a young officer of the foreign
                                service of Bangladesh to the then Pakistani High
                                Commission in India. When West Pakistan and East
                                Pakistan engaged in the liberation war, HRC
                                defected and became the Head of the liberation
                                movement in India. He developed a special
                                relationship with the Indian Prime Minister,
                                Indira Gandhi.
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="row d-flex align-items-center">
                        <div className="col-sm-3">
                          <div className="personImg">
                            <img
                              className="img-fluid w-100"
                              src={images.famous2}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="persontInfo">
                            <div className="personText">
                              <p>
                                In Asia, a person’s family and origins go a long
                                way to establish credibility. Mishal Karim’s
                                iconic grandfather was the Late Humayun Rasheed
                                Choudhury [HRC]. <br />
                                HRC was posted as a young officer of the foreign
                                service of Bangladesh to the then Pakistani High
                                Commission in India. When West Pakistan and East
                                Pakistan engaged in the liberation war, HRC
                                defected and became the Head of the liberation
                                movement in India. He developed a special
                                relationship with the Indian Prime Minister,
                                Indira Gandhi.
                              </p>
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rightImg text-end">
                <div className="mainImg">
                  <img className="img-fluid" src={images.famous1} alt="" />
                  <div className="ovImg">
                    <img className="img-fluid" src={images.famous3} alt="" />
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

export default Famous;
