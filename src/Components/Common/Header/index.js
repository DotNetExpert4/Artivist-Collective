import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URL_ABOUT_PAGE, URL_DONATE_PAGE } from "../../../Helpers/urls";

const Header = (props) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="nav-area fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <a href="#" className="logo">
            <img src="../assets/img/logo.png" alt="Logo" />
          </a>
        </div>

        <div className="mobile-nav mean-container">
          <a className="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
          <div className="mean-bar">
            {!mobileNav ? (
              <a
                href="#"
                onClick={() => setMobileNav(!mobileNav)}
                className="meanmenu-reveal"
              >
                <span>
                  <span>
                    <span></span>
                  </span>
                </span>
              </a>
            ) : (
              <a
                href="#nav"
                onClick={() => setMobileNav(!mobileNav)}
                className="meanmenu-reveal meanclose"
              >
                X
              </a>
            )}
            <nav className="mean-nav">
              {mobileNav && (
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Home
                      <i className="fa fa-angle-down"></i>
                    </a>
                    {/* <a className="mean-expand" onClick={() => toggleAction('homeMenu')} href="#">-</a> */}
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#t" className="nav-link">
                      Get Involved
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#t" className="nav-link">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="ml" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={URL_DONATE_PAGE} className="nav-link">
                      Donate
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>

        <div className="main-nav">
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <a className="navbar-brand logo-1" href="#">
                <img src="../assets/img/logo.png" alt="Logo" />
              </a>
              <a className="navbar-brand logo-2" href="#">
                <img src="../assets/img/logo.png" alt="Logo" />
              </a>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="#t" className="nav-link active">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link to={URL_ABOUT_PAGE} className="nav-link">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#t" className="nav-link">
                      Get Involved
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#t" className="nav-link">
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="https://templates.envytheme.com/gouba/default/charity-campaign/contact.html"
                      className="nav-link"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="others-option">
                  <div>
                    <div className="option-item">
                      <Link to={URL_DONATE_PAGE} className="default-btn">
                        Donate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
