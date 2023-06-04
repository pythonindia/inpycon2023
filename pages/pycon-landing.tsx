import Image from "next/image";
import greensquare from "../public/green-squar.png";
import yellowsquare from "../public/yellow-square.png";
import Mail from "../public/mail.png";
import LinkedIn from "../public/linkedin.png";
import Twitter from "../public/twitter.png";
import Instagram from "../public/instagram.png";
import zulip from "../public/zulip.png";
import Facebook from "../public/facebook.png";
import Logo from "../public/logo.png";

export default function PyConIndiaWeb() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" itemProp="keywords" content />
      <meta name="description" itemProp="description" content />
      <meta name="robots" content="index, follow" />
      <title>Pycon India Hyderabad, 2023</title>
      <link rel="icon" type="image/png" href="public/images/favicon.png" />
      <link rel="stylesheet" href="public/css/style.css" />
      <link href="public/css/aos.css" rel="stylesheet" />
      <link href="public/css/font-awesome.min.css" rel="stylesheet" />
      <link
        href="public/css/owl.carousel.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="public/css/owl.theme.default.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="public/css/bootstrap.min.css" rel="stylesheet" />
      {/* header section started */}
      <header className="bg-header">
        <div className="container p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar navbar-expand-lg text-center">
                <div className="container">
                  <a
                    className="navbar-brand d-block d-md-none headerlogo"
                    href="#"
                  >
                    <img src="public/images/logo.png" className="img-fluid" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#journey">
                          Journey
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#keynote">
                          Keynotes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#schedule">
                          Schedule
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#events">
                          Events
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sponsors">
                          Sponsors
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#attend">
                          Attend
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faq">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          More
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section ended */}
      {/* banner section started */}
      <section className="bg-banner">
        <div className="bg-banner-overlay">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <a href>
                    <img
                      src="../public/images/logo.png"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <p className="pt-3 text-center text-md-start">
                  The premier conference in India using and developing phython
                  programming language. Stay tuned for further updatesby
                  subscribing to our announcements.
                </p>
                {/* btn */}
                <div className="register-btn pt-3">
                  <button className="green-btn">
                    <a href="#" className="text-decoration-none text-light">
                      Register Now
                    </a>
                  </button>
                  <button className="submit-btn">
                    <a href="#" className="text-decoration-none">
                      Submit your work
                    </a>
                  </button>
                </div>
                <h2 className="pt-5 mb-4 date-text">
                  29 Sept - 02 Oct{" "}
                  <img
                    src="public/images/calendar.png"
                    alt
                    className="img-fluid"
                  />
                </h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="conference">
                      <h3 className="fw-bolder">CONFERENCE</h3>
                      <p className="pt-2">Aug 12, 13, Hyderabad</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="workshop">
                      <h3 className="fw-bolder">WORKSHOP</h3>
                      <p className="pt-2">Aug 13, Hyderabad</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dev">
                      <h3 className="fw-bolder">DEV SPRINTS</h3>
                      <p className="pt-2">Aug 15, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section ended */}
      {/* journery section started */}
      <section className="bg-journey" id="journey">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 pt-3 pb-5">
              <h2 className="com-head">Journey</h2>
            </div>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="slide-1 p-3">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-md-5">
                        <div className="s1-image">
                          <img
                            src="public/images/s1.png"
                            className="img-fluid w-100"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="s1-text p-2">
                          <h2 className="mb-3">
                            1<sup>st</sup> Year Of Pycon India 2009
                          </h2>
                          <div className="venue d-flex mt-4 justify-content-between">
                            <div className="date">
                              <h6 className="fw-bolder">Date:</h6>
                              <p>26Th And 27Th September, 2009</p>
                            </div>
                            <div className="place">
                              <h6 className="fw-bolder">Location:</h6>
                              <p>Indian Institute Of Science, Bangalore</p>
                            </div>
                          </div>
                          <h6 className="fw-bolder mt-4">
                            Keynote Speaker: Prabhu Ramachandran
                          </h6>
                          <p>
                            pycon Indian 2009 Is A Community Conference By The
                            Python Developer Community. A Purely Volunteer
                            Effort, It Is Being Hosted For First Time In India,
                            And Will Attract Some Of The Best Python Developers
                            In India And Abroad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slide-1 p-3">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-md-5">
                        <div className="s1-image">
                          <img
                            src="public/images/s1.png"
                            className="img-fluid w-100"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="s1-text p-2">
                          <h2 className="mb-3">
                            1<sup>st</sup> Year Of Pycon India 2009
                          </h2>
                          <div className="venue d-flex mt-4 justify-content-between">
                            <div className="date">
                              <h6 className="fw-bolder">Date:</h6>
                              <p>26Th And 27Th September, 2009</p>
                            </div>
                            <div className="place">
                              <h6 className="fw-bolder">Location:</h6>
                              <p>Indian Institute Of Science, Bangalore</p>
                            </div>
                          </div>
                          <h6 className="fw-bolder mt-4">
                            Keynote Speaker: Prabhu Ramachandran
                          </h6>
                          <p>
                            pycon Indian 2009 Is A Community Conference By The
                            Python Developer Community. A Purely Volunteer
                            Effort, It Is Being Hosted For First Time In India,
                            And Will Attract Some Of The Best Python Developers
                            In India And Abroad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="slide-1 p-3">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-md-5">
                        <div className="s1-image">
                          <img
                            src="public/images/s1.png"
                            className="img-fluid w-100"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="s1-text p-2">
                          <h2 className="mb-3">
                            1<sup>st</sup> Year Of Pycon India 2009
                          </h2>
                          <div className="venue d-flex mt-4 justify-content-between">
                            <div className="date">
                              <h6 className="fw-bolder">Date:</h6>
                              <p>26Th And 27Th September, 2009</p>
                            </div>
                            <div className="place">
                              <h6 className="fw-bolder">Location:</h6>
                              <p>Indian Institute Of Science, Bangalore</p>
                            </div>
                          </div>
                          <h6 className="fw-bolder mt-4">
                            Keynote Speaker: Prabhu Ramachandran
                          </h6>
                          <p>
                            pycon Indian 2009 Is A Community Conference By The
                            Python Developer Community. A Purely Volunteer
                            Effort, It Is Being Hosted For First Time In India,
                            And Will Attract Some Of The Best Python Developers
                            In India And Abroad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="pt-5">
            <img src="public/images/journey.png" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* journery section ended */}
      {/* speakers section started */}
      <section className="bg-speakers" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
              <img src="public/images/mike.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          {/* members */}
          <div className="row top-up">
            <div className="col-md-6">
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker1.png"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Ines Montani</h4>
                      <p>Founder Explosion/Spacy Core Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker3.png"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Jake Vanderplas</h4>
                      <p>
                        Astronomer By Training; Author Of Python Data Science
                        Handbook; Developer At Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker2.png"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>David Beazley</h4>
                      <p>
                        Author Of The Python Essential Reference And Python
                        Cookbook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker4.png"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Devi A S l</h4>
                      <p>Staff Engineer, Razorpay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* speakers section ended */}
      {/* conference section started */}
      <section className="bg-conference">
        <div className="container pb-3">
          <div className="row pt-5 pb-5">
            <div className="col-md-12">
              <h2 className="com-head">
                Conference Schedule{" "}
                <img
                  src="public/images/sandwatch.png"
                  alt
                  className="img-fluid"
                />
              </h2>
              <ul
                className="nav nav-pills mb-3 pt-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <span className="date-acc">Oct 12 | Friday</span>
                    <br />
                    Workshops
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <span className="date-acc">Oct 13 | Saturday</span>
                    <br />
                    Sponsor Workshops
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <span className="date-acc">Oct 14 | Sunday</span>
                    <br />
                    Conference day 1
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact1"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact1"
                    aria-selected="false"
                  >
                    <span className="date-acc">Oct 15 | Monday</span>
                    <br />
                    Conference Day 2
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-3" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">08:00 Am - 09:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab1.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Conference Registration
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">
                        09:30 Am - 010:30 Am
                      </p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab2.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Opening Address{" "}
                        <span className="ft-weight">
                          {" "}
                          By Manivannan Elangovan, Chair - Pycon India 2023
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">10:30 Am - 11:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab3.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        keynote 1{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>{" "}
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">11:30 Am - 12:00 Pm</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab4.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">Morning Tea Break</p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">12:00 Pm - 01:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab5.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        How Helpshift Built Machine Learning Platform Using
                        Python At Large Scale{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">08:00 Am - 09:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab1.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Conference Registration
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">
                        09:30 Am - 010:30 Am
                      </p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab2.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Opening Address{" "}
                        <span className="ft-weight">
                          {" "}
                          By Manivannan Elangovan, Chair - Pycon India 2023
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">10:30 Am - 11:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab3.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        keynote 1{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>{" "}
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">11:30 Am - 12:00 Pm</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab4.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">Morning Tea Break</p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">12:00 Pm - 01:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab5.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        How Helpshift Built Machine Learning Platform Using
                        Python At Large Scale{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">08:00 Am - 09:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab1.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Conference Registration
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">
                        09:30 Am - 010:30 Am
                      </p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab2.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Opening Address{" "}
                        <span className="ft-weight">
                          {" "}
                          By Manivannan Elangovan, Chair - Pycon India 2023
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">10:30 Am - 11:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab3.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        keynote 1{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>{" "}
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">11:30 Am - 12:00 Pm</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab4.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">Morning Tea Break</p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">12:00 Pm - 01:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab5.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        How Helpshift Built Machine Learning Platform Using
                        Python At Large Scale{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact1"
                  role="tabpanel"
                  aria-labelledby="pills-contact1-tab"
                >
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">08:00 Am - 09:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab1.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Conference Registration
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">
                        09:30 Am - 010:30 Am
                      </p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab2.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        Opening Address{" "}
                        <span className="ft-weight">
                          {" "}
                          By Manivannan Elangovan, Chair - Pycon India 2023
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">10:30 Am - 11:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab3.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        keynote 1{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>{" "}
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">11:30 Am - 12:00 Pm</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab4.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">Morning Tea Break</p>
                    </div>
                  </div>
                  <div className="row bt-bottom align-items-center pt-4 pb-4">
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">12:00 Pm - 01:30 Am</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src="public/images/tab5.png" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">
                        How Helpshift Built Machine Learning Platform Using
                        Python At Large Scale{" "}
                        <span className="ft-weight"> By Armin Ronacher </span>
                        <span className="rt-green text-white">hall 1</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion d-block d-md-none pt-5"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Oct 12 | Friday - Workshops
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            08:00 Am - 09:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab1.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Conference Registration
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            09:30 Am - 010:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab2.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Opening Address{" "}
                            <span className="ft-weight">
                              {" "}
                              By Manivannan Elangovan, Chair - Pycon India 2023
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            10:30 Am - 11:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab3.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            keynote 1{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>{" "}
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            11:30 Am - 12:00 Pm
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab4.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">Morning Tea Break</p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            12:00 Pm - 01:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab5.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            How Helpshift Built Machine Learning Platform Using
                            Python At Large Scale{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Oct 13 | Saturday - Sponsor Workshops
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            08:00 Am - 09:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab1.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Conference Registration
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            09:30 Am - 010:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab2.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Opening Address{" "}
                            <span className="ft-weight">
                              {" "}
                              By Manivannan Elangovan, Chair - Pycon India 2023
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            10:30 Am - 11:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab3.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            keynote 1{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>{" "}
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            11:30 Am - 12:00 Pm
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab4.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">Morning Tea Break</p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            12:00 Pm - 01:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab5.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            How Helpshift Built Machine Learning Platform Using
                            Python At Large Scale{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Oct 14 | Sunday - Conference day 1
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            08:00 Am - 09:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab1.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Conference Registration
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            09:30 Am - 010:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab2.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Opening Address{" "}
                            <span className="ft-weight">
                              {" "}
                              By Manivannan Elangovan, Chair - Pycon India 2023
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            10:30 Am - 11:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab3.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            keynote 1{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>{" "}
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            11:30 Am - 12:00 Pm
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab4.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">Morning Tea Break</p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            12:00 Pm - 01:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab5.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            How Helpshift Built Machine Learning Platform Using
                            Python At Large Scale{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Oct 15 | Monday - Conference day 2
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            08:00 Am - 09:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab1.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Conference Registration
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            09:30 Am - 010:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab2.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            Opening Address{" "}
                            <span className="ft-weight">
                              {" "}
                              By Manivannan Elangovan, Chair - Pycon India 2023
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            10:30 Am - 11:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab3.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            keynote 1{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>{" "}
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            11:30 Am - 12:00 Pm
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab4.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">Morning Tea Break</p>
                        </div>
                      </div>
                      <div className="row bt-bottom align-items-center pt-4 pb-4">
                        <div className="col-md-3 col-5">
                          <p className="mb-0 date-announced">
                            12:00 Pm - 01:30 Am
                          </p>
                        </div>
                        <div className="col-md-2 col-2 text-center">
                          <img
                            src="public/images/tab5.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7 col-5">
                          <p className="mb-0 date-content">
                            How Helpshift Built Machine Learning Platform Using
                            Python At Large Scale{" "}
                            <span className="ft-weight">
                              {" "}
                              By Armin Ronacher{" "}
                            </span>
                            <span className="rt-green text-white">hall 1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* conference section ended*/}
      {/* registrations section started */}
      <section className="bg-reg">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-6 text-white">
              <h2 className="com-head text-white">Registrations</h2>
              <h3 className="pt-5 text-white">Hyderabad, 29 Sep - 02 Oct</h3>
              <p className="pt-4 text-white">
                Pycon India 2023 is the premier conference for Python
                enthusiasts and professionals, offering an unparalleled
                opportunity to dive deep into the world of python and explore
                its limitless potentials.
              </p>
              <div className="register-btn mt-5">
                <button className="green-btn">
                  <a href="#" className="text-decoration-none text-light">
                    Register Now
                  </a>
                </button>
                <button className="submit-btn">
                  <a href="#" className="text-decoration-none">
                    Submit your work
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div>
                <img src="public/images/flip1.png" className="flip-img1" />
              </div>
              <div>
                <img src="public/images/flip2.png" className="flip-img2" />
              </div>
              <div>
                <img src="public/images/flip3.png" className="flip-img3" />
              </div>
              <div>
                <img src="public/images/flip4.png" className="flip-img4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* registrations section ended */}
      {/* pricetabe section started */}
      <section className="bg-pricetable">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-12 pb-5 text-center">
              <h2 className="com-head text-white pb-5">Tickets Price-table</h2>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Early Bird Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Student Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Regular Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 text-center">
          <img src="public/images/taj.png" className="img-fluid" />
        </div>
      </section>
      {/* pricetabe section ended */}
      {/* event sponsor section started */}
      <section className="bg-event">
        <div className="container pt-4">
          <div className="row justify-content-center align-items-center pt-5 pb-md-5">
            <div className="col-md-12">
              <h2 className="com-head">
                Event Sponsors{" "}
                <img
                  src="public/images/handshake.png"
                  alt
                  className="img-fluid ps-3"
                />
              </h2>
            </div>
            <div className="col-md-8">
              <p className="pt-md-5 pb-5">
                Pycon India is completely driven by volunteers. Sponsering the
                event helps to sustain and grow the conference as well as the
                Community. Sponsor help in making the conference affordable, and
                maintaing the inventory for the conference.
              </p>
            </div>
            <div className="col-md-4 pb-md-0 pb-5 text-center ">
              <button className="green-btn p-2 px-5">
                <a href="#" className="text-decoration-none text-light">
                  Download Prospectus
                </a>
              </button>
            </div>
            {/* sponsors */}
            <div className="col-md-12 m-auto sp-sor text-center pt-5">
              <div className="sponsortitle">Platinum</div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-12 m-auto sp-sor text-center pt-md-5">
              <div className="sponsortitle">Gold</div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" />
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event sponsor section ended */}
      {/* latest event section started */}
      {/* <section class="bg-latest">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-md-12">
            <h2 class="com-head">Latest Updates</h2>
          </div> */}
      {/* <div class="col-md-6">
            <iframe style="border:none;" data-tweet-url="https://twitter.com/pyconindia" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/pyconindia%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20pyconindia%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.instagram.com/__pyconindia__/?hl=enembed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          </div> */}
      {/* </div>
      </div>
    </section> */}
      {/* latest event section ended */}
      {/* subscribe section started */}
      <section className="bg-subscribe">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-end d-flex">
            <div className="col-md-6">
              <h2 className="com-head-1 mb-0">
                Subscribe <br /> For Conference Updates
              </h2>
            </div>
            <div className="col-md-6 pt-3 pt-md-0">
              <form className="d-flex">
                <input
                  type="email"
                  placeholder="Enter Your email "
                  id="email"
                />
                <div className="arr-img">
                  <img src="public/images/arrow-down.png" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 text-center ">
          <img src="public/images/sub.png" className="img-fluid" />
        </div>
      </section>
      {/* subscribe section ended */}
      {/* conferecne hall section started */}
      <section className="bg-hall d-flex align-items-center">
        <div className="container">
          <div className="row pt-5 pb-5 align-items-center">
            <div className="col-md-8 text-white text-center text-md-start">
              <h3 className="text-white hallhead">
                Hyderabad International <br /> Convention Center
              </h3>
              <p className="text-white">
                Novotel and HICC Complex, Kondapur, Hyderabad, Telugana 500081
              </p>
            </div>
            <div className="col-md-4 text-center text-md-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.731859931853!2d78.3710477239269!3d17.472543450348773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb922dedfac813%3A0xe3675c0e78567be0!2sHYDERABAD%20INTERNATIONAL%20CONVENTION%20CENTRE-HICC%2C%20Izzathnagar%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1685686414899!5m2!1sen!2sin"
                height={400}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      {/* conferecne hall section ended */}
      {/* footer section started */}
      <footer className="bg-footer">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-12 pb-5 text-center">
              <img src="public/images/logo.png" className="img-fluid" />
            </div>
            <div className="col-md-2 text-center text-md-start">
              <h3 className="footer-title">Connect Us On</h3>
              <ul className="social list-group list-group-horizontal justify-content-center justify-content-md-start">
                <li className="list-group-item ">
                  <a href>
                    <img src="public/images/social1.png" alt />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href>
                    <img src="public/images/social2.png" alt />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href>
                    <img src="public/images/social3.png" alt />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href>
                    <img src="public/images/social4.png" alt />
                  </a>
                </li>
                <li className="list-group-item">
                  <a href>
                    <img src="public/images/social5.png" alt />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md text-center pt-md-0 pt-4">
              <h3 className="footer-title">
                Copyright @ 2023 Python Software Society of India
              </h3>
            </div>
            <div className="col-md-2 text-center text-md-start pt-md-0 pt-3">
              <h3 className="footer-title">Design By</h3>
              <img src="public/images/webchirpy.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </footer>
      {/* footer section ended */}
      {/* bootstrap */}
      {/* animation */}
    </div>
  );
}
