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

import Footer from "../components/footer";
import Header from "../components/header";
import Journey from "../components/journey";
import HeroBanner from '../components/HeroBanner';
import Speakers from "../components/speakers";
import ConferenceSchedule from "../components/conferenceSchedule";
import Registrations from "../components/registrations";
import PriceTable from "../components/pricetable";
import EventSponsors from "../components/eventSponsors";
import Subscribe from "../components/subscribe";
import ConferenceHall from "../components/conferenceHall";

export default function PyConIndiaWeb() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" itemProp="keywords" content="PyCon India, PyConIndia, PyConIndia2023, Python, India, PyCon, Conference, Hyderabad, 2023, PyConIn" />
      <meta name="keywords" itemProp="description" content="The premier conference in India on using and developing the python programming language" />
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
      <Header/>
      {/* header section ended */}

      {/* banner section started */}
      <HeroBanner/>
      {/* banner section ended */}

      {/* journery section started */}
      <Journey/>
      {/* journery section ended */}

      {/* speakers section started */}
      <Speakers/>
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
                  alt=""
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
                      <img src="public/images/tab1.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab2.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab3.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab4.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab5.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab1.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab2.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab3.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab4.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab5.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab1.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab2.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab3.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab4.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab5.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab1.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab2.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab3.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab4.png" className="img-fluid" alt=""/>
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
                      <img src="public/images/tab5.png" className="img-fluid" alt=""/>
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                            alt=""
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
                <img src="public/images/flip1.png" className="flip-img1" alt=""/>
              </div>
              <div>
                <img src="public/images/flip2.png" className="flip-img2" alt=""/>
              </div>
              <div>
                <img src="public/images/flip3.png" className="flip-img3" alt=""/>
              </div>
              <div>
                <img src="public/images/flip4.png" className="flip-img4" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* registrations section ended */}
      
      {/* pricetabe section started */}
      <PriceTable/>
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
                  alt=""
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
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-md-12 m-auto sp-sor text-center pt-md-5">
              <div className="sponsortitle">Gold</div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-2.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-3.png" className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle">
                <img src="public/images/sp-1.png" className="img-fluid" alt=""/>
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
      <Subscribe/>
      {/* subscribe section ended */}


      {/* conferecne hall section started */}
        <ConferenceHall/>
      {/* conferecne hall section ended */}
      
      {/* Footer section started */}
      <Footer />
       {/* Footer section ended */}
      {/* bootstrap */}
      {/* animation */}
    </div>
  );
}
