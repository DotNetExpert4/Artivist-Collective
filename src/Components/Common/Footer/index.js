import React, { useEffect, useState } from "react";

import Api from "./../../../Helpers/Api";

const Footer = () => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    location: "",
  });

  //Get contact
  const getContact = async () => {
    try {
      const result = await Api.getContact();
      if (result.length > 0) setContact(result[0]);
      console.log(result);
    } catch (error) {
      console.error("getContact -> error", error);
    }
  };

  const getFooterData = async () => {
    await Api.getAccessToken();
    Promise.all([getContact()]);
  };
  useEffect(() => {
    getFooterData();
  }, []);
  const { location, phone, email } = contact;
  return (
    <div className="footer-section pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="index.html">
                  <img src="../assets/img/logo.png" alt="logo" />
                </a>
              </div>
              <ul className="footer-contact-info">
                <li>
                  <i className="flaticon-call"></i>
                  <a href="tel:4498886660000">{phone}</a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href={`mailto:` + email}>{email}</a>
                </li>
                <li>
                  <i className="fa fa-crosshairs"></i>
                {location}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>About Us</h3>
              <ul className="quick-links">
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Who We Are</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Volunteers</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Forum Support</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Upcoming Events</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Trending News</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Causes</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Quick Link</h3>
              <ul className="quick-links">
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Home</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">About</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Get Involved</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">News</a>
                </li>
                <li>
                  <i className="flaticon-right-arrow"></i>
                  <a href="#t">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Newsletter</h3>
              <div className="text">
                <p>Our plan dolor sit amet conserisci velit sed quiLorem </p>
              </div>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Your Email"
                  name="EMAIL"
                  required
                />
                <button type="submit">Subscribe</button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="footer-bottom-text">
                <p>
                  Copyright @2021 The Artivist Foundation. All Rights Reserved.
                </p>
                <p>
                  Powered by&nbsp;
                  <a href="https://www.flexiblesites.com/" target="_blank">
                    FlexibleSites
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <ul className="footer-bottom-social">
                <li>
                  <a href="#" target="_blank">
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="flaticon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="flaticon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
