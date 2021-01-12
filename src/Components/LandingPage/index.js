import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
import Api from "../../Helpers/Api";
import { Fragment } from "react";
import "./style.scss";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer/>
    </div>
  );
};

const Content = () => {
  const [teams, setTeams] = useState([]);
  const [headerCarousel, setHeaderCarousel] = useState([]);
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(null);
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

  //Get Header Carousel
  const getHeaderCarousel = async () => {
    try {
      const result = await Api.getHeaderCarousel();
      const imageIds = result.map((data) => data.background_image);
      const imagesData = await Api.getAllImageUrl({
        "filter[id][in]": imageIds.toString(),
      });

      result.map((data) => {
        let imageUrls = imagesData.filter(
          (details) => details.id === data.background_image
        );
        if (imageUrls.length > 0) data.imageUrl = imageUrls[0].data.full_url;
      });
      setHeaderCarousel(result);
    } catch (error) {
      console.error("getTestimonials -> error", error);
    }
  };

  //Get Teams
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

  //Get Teams
  const getNews = async () => {
    try {
      const result = await Api.getNews();
      const imageIds = result.map((news) => news.image);
      const imagesData = await Api.getAllImageUrl({
        "filter[id][in]": imageIds.toString(),
      });

      result.map((data) => {
        let imageUrls = imagesData.filter(
          (details) => details.id === data.image
        );
        if (imageUrls.length > 0) data.imageUrl = imageUrls[0].data.full_url;
      });
      setNews(result);
    } catch (err) {
      console.error("getTeams -> err", err);
    }
  };
  const getHomeData = async () => {
    await Api.getAccessToken();
    Promise.all([getHeaderCarousel(), getTeams(), getNews()]);
  };
  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <Fragment>
      <div className="container-fluid p-0">
        <OwlCarousel
          items={1}
          className="home-slider owl-carousel owl-theme"
          loop
          nav
          navText={[
            `<i class="flaticon-left-arrow"></i>`,
            `<i class="flaticon-right-arrow"></i>`,
          ]}
          dots={false}
        >
          {headerCarousel.map((item, index) => (
            <div
              className="home-item item-bg1 active"
              style={{
                background: `url(${item.imageUrl}) no-repeat center center`,
              }}
              key={index}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-content">
                      <span>{item.title}</span>
                      <h2>{item.description}</h2>
                      <div className="slider-btn">
                        <a href={item.button1_url} className="default-btn">
                          {item.button1_text}
                        </a>
                        {item.button2_url && (
                          <a href={item.button2_url} className="optional-btn">
                            {item.button2_text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape">
                <img src="../../assets/img/slider/shape.png" alt="" />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <section id="about" className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-area-content">
                <span>Who we are</span>
                <h3>The Artivist Foundation</h3>
                <p>
                  is building a virtual community platform called Collective to
                  amplify the voices of activist artists and connect them with
                  local and global communities to fight for social, racial,
                  environmental and economic justice. The challenges we face in
                  this moment are some of the most critical in our history. In
                  the face of social and economic inequality, climate change,
                  and deep ideological division, the world needs to hear the
                  voices of Artivists now more than ever. In our communities and
                  scenes, we are seeing amazing artists rise to the challenge
                  and offer their voices through the creation of powerful work.
                  However, the media landscape has evolved to create barriers
                  that stifle their potential; many Artivists are left without a
                  stage on which to be seen. While they can display their art on
                  existing social media platforms, their voices often get lost
                  among the oversaturation of commercial content. This can make
                  it almost impossible for communities of artists and activists
                  to find each other. In the process, our larger community and
                  culture loses the chance to grow with these artists’ important
                  voices and visions of change. ​ Art has the power to process
                  and convey our emotions. It has the potential to deeply affect
                  people on a large scale. Collective is a unique space that
                  will give momentum to the necessary movements that will shape
                  the future of our generation.
                </p>
              </div>
              <div className="about-tab">
                <div className="tab about-list-tab">
                  <ul className="tabs">
                    <li>
                      <a href="#d">
                        <i className="flaticon-goal"></i>
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="#d">
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
                <img src="../../Assets/img/about/image1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview-section ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 pr-0">
              <div className="overview-content mb-ud">
                <h3>Happy Impoverished To Artists Of The Week </h3>
                <span>Get Rid Them From Poverty</span>

                <ul className="overview-list">
                  <li>
                    Goal
                    <span>$5678</span>
                  </li>

                  <li>
                    Raised
                    <span>$7890</span>
                  </li>
                </ul>
                <a href="#b" className="donate-btn">
                  Donate to Join
                  <i className="flaticon-curve-arrow-1"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 pl-0">
              <OwlCarousel
                items={1}
                className="overview-image-slider owl-carousel owl-theme"
                loop={true}
                nav={true}
                dots={false}
                autoplayHoverPause={true}
                autoplay={true}
                smartSpeed={1000}
                navText={[
                  `<i class="flaticon-left-arrow"></i>`,
                  `<i class="flaticon-right-arrow"></i>`,
                ]}
              >
                <div className="image">
                  <img src="../../Assets/img/overview/image1.jpg" alt="" />
                </div>
                <div className="image-2">
                  <img src="../../Assets/img/overview/image2.jpg" alt="" />
                </div>
                <div className="image-3">
                  <img src="../../Assets/img/overview/image3.jpg" alt="" />
                </div>
                <div className="image-4">
                  <img src="../../Assets/img/overview/image4.jpg" alt="" />
                </div>
              </OwlCarousel>
            </div>

            <div className="col-lg-3 col-sm-6 pl-0">
              <div className="overview-dollar">
                <span>We Need</span>
                <h3>$5000</h3>
                <p>Reached Around</p>
                <a href="#b" className="learn-more">
                  Join the Plan
                  <i className="flaticon-curve-arrow-1"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="overview-dollar">
                <span>Our Plan Of Project</span>
                <h3>$9,00,000</h3>
                <p>Join with your money to help</p>
                <a href="#b" className="learn-more">
                  Join the Plan
                  <i className="flaticon-curve-arrow-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="event" className="events-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Events & Arrangement</span>
            <h2>Get Involved</h2>
            <p>
              Would be great to see you consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magnatur adipiscing
              liqua.{" "}
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="events-image-slider owl-carousel owl-theme">
                <OwlCarousel
                  items={1}
                  className="events-image-slider owl-carousel owl-theme"
                  loop
                  nav
                  navText={[
                    `<i class="flaticon-curve-arrow"></i>`,
                    `<i class="flaticon-curve-arrow-1"></i>`,
                  ]}
                  dots={false}
                >
                  <div className="item">
                    <img src="assets/img/events/image1.jpg" alt="" />
                    <div className="content">
                      <span>08 Dec 2020 9:00 AM - 3:00 PM</span>
                      <h3>Helping Hopeless People</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ctur re et dolore magnam
                        aliquam quaerat luptatem.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <img src="../../Assets/img/events/image2.jpg" alt="" />

                    <div className="content">
                      <span>08 Dec 2020 9:00 AM - 3:00 PM</span>
                      <h3>Helping Hopeless People</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ctur re et dolore magnam
                        aliquam quaerat luptatem.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/img/events/image3.jpg" alt="" />

                    <div className="content">
                      <span>08 Dec 2020 9:00 AM - 3:00 PM</span>
                      <h3>Helping Hopeless People</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ctur re et dolore magnam
                        aliquam quaerat luptatem.
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="events-item">
                <div className="events-text">
                  <h3>
                    Helping The Poor Or Hopeless People Around The World 2k20
                  </h3>
                </div>

                <div className="events-content">
                  <div className="icon">
                    <i className="flaticon-goal"></i>
                  </div>
                  <h3>Event Mission</h3>
                  <p>
                    Our plan dolor sit amet conseetur diisci velised quiLorem
                    ipsum dolor sit ame constetur adipisicing elit
                  </p>
                </div>
                <div className="events-content">
                  <div className="icon">
                    <i className="flaticon-vision"></i>
                  </div>
                  <h3>Event Vision</h3>
                  <p>
                    Our plan dolor sit amet conseetur diisci velised quiLorem
                    ipsum dolor sit ame constetur adipisicing elit
                  </p>
                </div>
                <div className="events-btn">
                  <a href="#h" className="events-btn-one">
                    <i className="flaticon-curve-arrow"></i>
                    Join to Donate
                  </a>
                  <a href="tel:4456650984" className="events-btn-two">
                    <i className="flaticon-call"></i>
                    +445-665-0984
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="events-shape">
          <div className="shape-one">
            <img src="../../Assets/img/events/shape.png" alt="" />
          </div>

          <div className="shape-two">
            <img src="../../Assets/img/events/shape2.png" alt="" />
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

      <section id="news" className="blog-section pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Members be great to see you consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magnatur adipiscing
              liqua.
            </p>
          </div>
          <OwlCarousel
            items={3}
            className="blog-slider owl-carousel owl-theme"
            {...options}
            loop={true}
            nav={false}
            dots={true}
            autoplayHoverPause={true}
            autoplay={true}
            smartSpeed={1000}
            margin={30}
            navText={[
              `<i class="flaticon-left-arrow"></i>`,
              `<i class="flaticon-right-arrow"></i>`,
            ]}
          >
            {news.map((item, index) => (
              <div className="blog-item" key={index}>
                <div className="image">
                  <a href="blog-details.html">
                    <img src={item.imageUrl} alt="" />
                  </a>
                  {/* <div className="btn">
                    <a href="#v">Cancer</a>
                  </div> */}
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="fa fa-calendar"></i>
                    {item.date}
                  </li>
                  {/* <li>
                    <i className="fa fa-comments"></i>
                    <a href="#v">1 Comment</a>
                  </li> */}
                </ul>
                <div className="content">
                  <h3>
                    <a href={item.link}>{item.name}</a>
                  </h3>
                  <p>Money plan dolor sit amet conseeurisi velised quiLorem</p>
                  <a href={item.link} className="read-more">
                    Read More
                    <i className="flaticon-curve-arrow-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className="events-shape">
          <div className="shape-one">
            <img src="assets/img/events/shape.png" alt="" />
          </div>

          <div className="shape-two">
            <img src="assets/img/events/shape2.png" alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default LandingPage;
