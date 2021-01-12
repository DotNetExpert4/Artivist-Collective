import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Api from "../../../Helpers/Api";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import "./style.css";

const About = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const Content = () => {
  const [teams, setTeams] = useState([]);
  const [about, setAbout] = useState([]);
  const [show, setShow] = useState(null);
  useEffect(() => {
    getAboutData();
    counter();
  }, []);
  const handleClose = () => {
    setShow(null);
  };
  const handleShow = (e, index) => {
    setShow(index);
  };
  const options = {
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };

  //get Teams
  const getTeams = async () => {
    try {
      const result = await Api.getTeams();
      const imageIds = result.map((member) => member.image);
      const imagesData = await Api.getAllImageUrl({
        "filter[id][in]": imageIds.toString(),
      });

      result.map((data) => {
        let imageUrls = imagesData.filter(
          (details) => details.id === data.image
        );
        if (imageUrls.length > 0) data.imageUrl = imageUrls[0].data.full_url;
      });
      setTeams(result);
    } catch (err) {
      console.error("getTeams -> err", err);
    }
  };

  //get About
  const getAbout = async () => {
    try {
      const result = await Api.getAbout();
      //get vision image
      const vision_imageId = result.map((member) => member.vision_image);
      const vision_imageData = await Api.getAllImageUrl({
        "filter[id][in]": vision_imageId.toString(),
      });

      result.map((data) => {
        let imageUrls = vision_imageData.filter(
          (details) => details.id === data.vision_image
        );

        if (imageUrls.length > 0)
          data.mission_image = vision_imageData[0].data.full_url;
      });

      //Get Mission image data
      const mission_imageId = result.map((member) => member.mission_image);
      const mission_imageData = await Api.getAllImageUrl({
        "filter[id][in]": mission_imageId.toString(),
      });

      result.map((data) => {
        let imageUrls = mission_imageData.filter(
          (details) => details.id === data.mission_image
        );

        if (imageUrls.length > 0)
          data.mission_image = mission_imageData[0].data.full_url;
      });

      //get Who we Are image data
      const who_we_are_imageId = result.map(
        (member) => member.who_we_are_image
      );

      const who_we_are_ImageData = await Api.getAllImageUrl({
        "filter[id][in]": who_we_are_imageId.toString(),
      });

      result.map((data) => {
        let imageUrls = who_we_are_ImageData.filter(
          (details) => details.id === data.who_we_are_image
        );

        if (imageUrls.length > 0)
          data.who_we_are_image = who_we_are_ImageData[0].data.full_url;
      });
      setAbout(result[0]);
    } catch (err) {
      console.error("getAbout -> err", err);
    }
  };

  const getAboutData = async () => {
    await Api.getAccessToken();
    Promise.all([getTeams(), getAbout()]);
  };

  const {
    who_we_are_text,
    who_we_are_title,
    who_we_are_image,
    mission_image,
    mission_title,
    mission_text,
    vision_image,
    vision_title,
    vision_text,
  } = about;

  const counter = () => {
    jQuery(function ($) {
      $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    });
  };

  return (
    <>
      <section id="about" className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-area-content">
                <span>Mission statement</span>
                <h3>{mission_title}</h3>
                <p dangerouslySetInnerHTML={{ __html: mission_text }}></p>
              </div>

              <div className="about-tab">
                <div className="tab about-list-tab">
                  <ul className="tabs">
                    <li>
                      <a href="#">
                        <i className="flaticon-goal"></i>
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-goal-1"></i>
                        Our Vision
                      </a>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div className="tabs_item">
                      <div className="text">
                        <p>
                          Our plan dolor sit amet conseetur diisci velit sed
                          quiLorem ipsum dolor sit ame consectetur adipisicing
                          elit
                        </p>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-right"></i>
                          Respect for all people
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Excellence in everything we do
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Truthfulness in our business
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Unquestionable integrity
                        </li>
                      </ul>
                    </div>

                    <div className="tabs_item">
                      <div className="text">
                        <p>
                          Our plan dolor sit amet conseetur diisci velit sed
                          quiLorem ipsum dolor sit ame consectetur adipisicing
                          elit
                        </p>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-right"></i>
                          Respect for all people
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Excellence in everything we do
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Truthfulness in our business
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Unquestionable integrity
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <img src={mission_image} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section pt-100">
        <div className="container">
          <div className="section-title">
            <span>Watch Video</span>
            <h2>Video Presentation</h2>
          </div>

          <div className="video-image">
            <div className="video">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=xTrQb2DDr20&t=30s&ab_channel=THEARTIVISTFOUNDATION"
                className="video-btn popup-youtube"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src={who_we_are_image} alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-area-content">
                <span>Who We Are</span>
                <h3>{who_we_are_title}</h3>
                <p dangerouslySetInnerHTML={{ __html: who_we_are_text }}></p>
              </div>
              <div className="about-tab">
                <div className="tab about-list-tab">
                  <ul className="tabs">
                    <li>
                      <a href="#">
                        <i className="flaticon-goal"></i>
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-goal-1"></i>
                        Our Vision
                      </a>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div className="tabs_item">
                      <div className="text">
                        <p>
                          Our plan dolor sit amet conseetur diisci velit sed
                          quiLorem ipsum dolor sit ame consectetur adipisicing
                          elit
                        </p>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-right"></i>
                          Respect for all people
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Excellence in everything we do
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Truthfulness in our business
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Unquestionable integrity
                        </li>
                      </ul>
                    </div>

                    <div className="tabs_item">
                      <div className="text">
                        <p>
                          Our plan dolor sit amet conseetur diisci velit sed
                          quiLorem ipsum dolor sit ame consectetur adipisicing
                          elit
                        </p>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-right"></i>
                          Respect for all people
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Excellence in everything we do
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Truthfulness in our business
                        </li>

                        <li>
                          <i className="flaticon-right"></i>
                          Unquestionable integrity
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-section ptb-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="counter-content">
                <span>Our Vision</span>
                <h3>{vision_title}</h3>
                <p dangerouslySetInnerHTML={{ __html: vision_text }}></p>
                <a href="#">Learn More</a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <div class="about single-fun-fact">
                    <h3>
                      <span class="odometer" data-count="2019">
                        00
                      </span>
                    </h3>
                    <p>Volunteers Worldwide</p>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                  <div class="about single-fun-fact">
                    <h3>
                      <span class="odometer" data-count="5020">
                        00
                      </span>
                    </h3>
                    <p>Helping Centers</p>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                  <div class="about single-fun-fact">
                    <h3>
                      <span class="odometer" data-count="1505">
                        00
                      </span>
                    </h3>
                    <p>Million Donations</p>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                  <div class="about single-fun-fact">
                    <h3>
                      <span class="odometer" data-count="1246">
                        00
                      </span>
                    </h3>
                    <p>successful Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-section pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
            <p></p>
          </div>
          <OwlCarousel
            items={3}
            className="team-slider owl-carousel owl-theme"
            {...options}
            loop={true}
            nav={false}
            dots={true}
            autoplayHoverPause={true}
            autoplay={true}
            smartSpeed={1000}
            margin={30}
            navText={[
              `<i class="flaticon-left"></i>`,
              `<i class="flaticon-right"></i>`,
            ]}
          >
            {teams.map((item, index) => (
              <Fragment key={index}>
                <div className="team-item">
                  <div className="image">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="responsive"
                      onClick={(e) => handleShow(e, item.id)}
                      role="button"
                    />
                    <ul className="social">
                      <li>
                        <a href="#r" target="_blank">
                          <i className="flaticon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#r" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={item.linkedin_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={item.instagram_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="content">
                      <h3>{item.name}</h3>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </OwlCarousel>
          {teams.map((item, index) => (
            <Modal
              className="team-modal"
              id={item.id}
              show={show === item.id}
              onHide={handleClose}
              size="lg"
              key={index}
            >
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="bio-modal-content">
                <div className="bio-name-wrapper ">
                  <div className="default-img in-modal">
                    <img src={item.imageUrl} alt="img" className="img-fluid" />
                  </div>
                  <div className="section-title pos-rel ">
                    <div className="section-text pos-rel">
                      <h2>{item.name}</h2>
                      <h6 className="f-500  letter-spacing pink-color">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="bio-desc">
                  <p>{item.description}</p>
                </div>
                <div className="social">
                  <a href={item.twitter} target="blank">
                    <i className="flaticon-twitter"></i>
                  </a>
                  <a href={item.instagram} target="blank">
                    <i className="flaticon-instagram"></i>
                  </a>
                  <a href={item.facebook} target="blank">
                    <i className="flaticon-facebook"></i>
                  </a>
                  <a href={item.linkedin} target="blank">
                    <i className="flaticon-linkedin"></i>
                  </a>
                </div>
              </div>
            </Modal>
          ))}
        </div>
      </section>
    </>
  );
};
export default About;
