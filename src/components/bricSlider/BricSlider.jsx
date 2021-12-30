import React from "react";
import images from "../../images/AllExports";
import "./bricslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

const BricSlider = () => {
  return (
    <>
      <section className="bricSlider" id="bricSlider">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <div className="row">
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleSlider">
                    <span className="brictxt">BRIC</span>
                    <h1>Global Team</h1>
                    <img
                      className="img-fluid w-50"
                      src={images.corporation04}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleSlider">
                    <img
                      className="img-fluid"
                      src={images.singleperson3}
                      alt=""
                    />
                    <div className="personDetails">
                      <p className="pName">MR. ANTHONY CORBETT</p>
                      <hr className="hrColor" />
                      <span className="pTitle">Chief of Finance - BRIC</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleSlider">
                    <img
                      className="img-fluid"
                      src={images.singleperson4}
                      alt=""
                    />
                    <div className="personDetails">
                      <p className="pName">MR. JAMAL KHAN</p>
                      <hr className="hrColor" />
                      <span className="pTitle">Legal Head - BRIC</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default BricSlider;
