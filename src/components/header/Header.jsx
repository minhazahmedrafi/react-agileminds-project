import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./header.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import images from "../../images/AllExports";
import { IoIosArrowUp } from "react-icons/io";
SwiperCore.use([Navigation, Autoplay]);

const Header = () => {
  const [arrow, setArrow] = useState(false);

  const animateAroow = () => {
    if (window.scrollY >= 500) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };
  window.addEventListener("scroll", animateAroow);

  return (
    <>
      <div className="header" id="header">
        <Navbar />
        <div className="headerContent">
          <div className="container-fluid">
            <Swiper
              navigation={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <div className="row">
                <div className="col-12">
                  <SwiperSlide>
                    <div className="headerBannerContent container px-3">
                      <h2>Group of Company</h2>
                      <h1>We’re Here To Help You</h1>
                      <p>
                        Our company is one of the world’s leading management{" "}
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="headerBannerContent container px-3">
                      <h2>Group of Company</h2>
                      <h1>We’re Here To Help You</h1>
                      <p>
                        Our company is one of the world’s leading management{" "}
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="headerBannerContent container px-3">
                      <h2>Group of Company</h2>
                      <h1>We’re Here To Help You</h1>
                      <p>
                        Our company is one of the world’s leading management{" "}
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="bottomDown text-center">
          <a href="#">
            <svg
              width="33"
              height="50"
              viewBox="0 0 33 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_34_77)">
                <path
                  d="M32.7438 25.0078C32.7438 27.8237 32.7438 30.641 32.7438 33.4584C32.728 41.5407 27.2558 48.1605 19.3144 49.7094C10.6668 51.3992 1.88984 45.4237 0.33089 36.7531C0.133366 35.6614 0.0299197 34.5548 0.0216893 33.4454C-0.00851177 27.8122 0.00155577 22.1775 0.0087465 16.5443C0.0188135 8.67336 5.23784 2.14706 12.9118 0.391084C21.4688 -1.56767 30.3551 4.01809 32.2822 12.6153C32.5584 13.9116 32.7068 15.232 32.7251 16.5573C32.7884 19.3732 32.7438 22.1905 32.7438 25.0078ZM1.73021 25.0078C1.73021 27.7892 1.73021 30.5706 1.73021 33.3491C1.73021 33.9387 1.75897 34.5326 1.8165 35.1208C2.67938 43.872 11.2061 49.9337 19.7487 47.8614C26.3642 46.2593 30.9735 40.4866 31.0108 33.687C31.041 27.8927 31.0252 22.097 31.0108 16.3013C31 15.5125 30.9308 14.7256 30.8037 13.947C29.6144 6.21989 22.0124 0.675837 14.2895 1.88819C6.91904 3.0459 1.74171 9.08899 1.73021 16.5573C1.72637 19.3712 1.72637 22.1862 1.73021 25.0021V25.0078Z"
                  fill="url(#paint0_linear_34_77)"
                />
                <path
                  d="M17.2362 14.7151C17.2362 16.904 17.2362 19.0928 17.229 21.2817C17.229 21.5391 17.206 21.8886 17.0463 22.0309C16.8234 22.2294 16.415 22.4236 16.1748 22.3459C16.0214 22.2757 15.8854 22.1724 15.7767 22.0433C15.6681 21.9142 15.5894 21.7627 15.5463 21.5995C15.4428 21.1005 15.5133 20.5655 15.5133 20.0449V8.25208C15.5133 8.10827 15.5133 7.96445 15.5133 7.82064C15.5406 7.26839 15.8814 6.90885 16.3762 6.90741C16.8709 6.90598 17.2261 7.26839 17.239 7.8192C17.2534 8.91363 17.239 10.0081 17.239 11.1025L17.2362 14.7151Z"
                  fill="url(#paint1_linear_34_77)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_34_77"
                  x1="59.157"
                  y1="146.927"
                  x2="-131.743"
                  y2="-47.6582"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF4D84" />
                  <stop offset="1" stop-color="#F47929" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_34_77"
                  x1="18.6602"
                  y1="52.3287"
                  x2="-1.56868"
                  y2="48.7541"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF4D84" />
                  <stop offset="1" stop-color="#F47929" />
                </linearGradient>
                <clipPath id="clip0_34_77">
                  <rect width="32.7581" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="overlayBar">
          <div className="bar1">
            <img className="img-fluid" src={images.bar1} alt="" />
          </div>
          <div className="bar2">
            <img className="img-fluid" src={images.bar2} alt="" />
          </div>
        </div>
        <a href="#header" className={arrow ? "upArrow arrowActive" : "upArrow"}>
          <IoIosArrowUp className="arrowIcon" />
        </a>
      </div>
    </>
  );
};

export default Header;
