import ScheduleData from '../data/schedule.yml';
import React, { useState } from 'react';


const ConferenceSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const currentSchedule = ScheduleData[selectedTab];

  return (
    <section className="bg-conference" id="schedule">
      <div className="container pb-3">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <h2 className="com-head">
              Conference Schedule <img src="images/sandwatch.png" alt="" className="img-fluid" />
            </h2>
            <ul className="nav nav-pills mb-3 pt-5" id="pills-tab" role="tablist">
              {ScheduleData.map((item, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${index === selectedTab ? 'active' : ''}`}
                    id={`pills-tab-${index}`}
                    type="button"
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="date-acc">{item.date}</span>
                    <br />
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content pt-3" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                {currentSchedule.schedule.map((scheduleItem, idx) => (
                  <div className="row bt-bottom align-items-center pt-4 pb-4" key={idx}>
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">{scheduleItem.time}</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={scheduleItem.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">{scheduleItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSchedule;


{/* <section className="bg-conference" id="schedule">
<div className="container pb-3">
  <div className="row pt-5 pb-5">
    <div className="col-md-12">
      <h2 className="com-head">
        Conference Schedule{" "}
        <img
          src="images/sandwatch.png"
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
              <img src="images/tab1.png" className="img-fluid" alt=""/>
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
              <img src="images/tab2.png" className="img-fluid" alt=""/>
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
              <img src="images/tab3.png" className="img-fluid" alt=""/>
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
              <img src="images/tab4.png" className="img-fluid" alt=""/>
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
              <img src="images/tab5.png" className="img-fluid" alt=""/>
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
              <img src="images/tab1.png" className="img-fluid" alt=""/>
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
              <img src="images/tab2.png" className="img-fluid" alt=""/>
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
              <img src="images/tab3.png" className="img-fluid" alt=""/>
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
              <img src="images/tab4.png" className="img-fluid" alt=""/>
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
              <img src="images/tab5.png" className="img-fluid" alt=""/>
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
              <img src="images/tab1.png" className="img-fluid" alt=""/>
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
              <img src="images/tab2.png" className="img-fluid" alt=""/>
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
              <img src="images/tab3.png" className="img-fluid" alt=""/>
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
              <img src="images/tab4.png" className="img-fluid" alt=""/>
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
              <img src="images/tab5.png" className="img-fluid" alt=""/>
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
              <img src="images/tab1.png" className="img-fluid" alt=""/>
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
              <img src="images/tab2.png" className="img-fluid" alt=""/>
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
              <img src="images/tab3.png" className="img-fluid" alt=""/>
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
              <img src="images/tab4.png" className="img-fluid" alt=""/>
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
              <img src="images/tab5.png" className="img-fluid" alt=""/>
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
                    src="images/tab1.png"
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
                    src="images/tab2.png"
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
                    src="images/tab3.png"
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
                    src="images/tab4.png"
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
                    src="images/tab5.png"
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
                    src="images/tab1.png"
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
                    src="images/tab2.png"
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
                    src="images/tab3.png"
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
                    src="images/tab4.png"
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
                    src="images/tab5.png"
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
                    src="images/tab1.png"
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
                    src="images/tab2.png"
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
                    src="images/tab3.png"
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
                    src="images/tab4.png"
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
                    src="images/tab5.png"
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
                    src="images/tab1.png"
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
                    src="images/tab2.png"
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
                    src="images/tab3.png"
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
                    src="images/tab4.png"
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
                    src="images/tab5.png"
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
</section> */}