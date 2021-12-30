import React from "react";
import images from "../../images/AllExports";
import "./navbar.scss";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="topNav d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="topLeft">
                  <div className="logo">
                    <img className="img-fluid" src={images.logo} alt="" />
                  </div>
                  <div className="phone">
                    <p>
                      Phone Number:{" "}
                      <a href="tel:8801843331223">+8801843331223</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 topRight">
                <div className="email">
                  <p>
                    Email:{" "}
                    <a href="mailto:info@agilemindscorp.com">
                      info@agilemindscorp.com
                    </a>
                  </p>
                </div>
                <div className="topRightBtn ">
                  <a href="#" className="getBtn">
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <nav className="navbar navbar-expand-lg navbar-light pt-lg-4">
            <div className="container">
              <a className="navbar-brand d-lg-none" href="#">
                <img src={images.logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <AiOutlineAlignRight className="barIcon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link activeHome"
                      aria-current="page"
                      to="#"
                    >
                      Home{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Portfolio{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Team{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Philosophy{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Experience{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Jobs{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Contact{" "}
                      <span>
                        <BsDot className="dot" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
