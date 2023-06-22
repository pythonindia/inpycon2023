import Image from "next/image";
import React from "react";

import Button from "./button";
import calendar from "../public/images/calendar.png";
import logo from "../public/images/logo.png";
import calendarData from "../data/calendar.yml";

const HeroBanner = () => {
  return (
    <section className="bg-banner">
      <div className="bg-banner-overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 hero-container pt-4 pb-4">
              <div className="d-none d-md-block">
                <a href="#">
                  <Image src={logo} width="100%" height="100%" alt="" />
                </a>
              </div>
              <p className="pt-3 text-center text-md-start">
              PyCon India 2023 is the premier conference for Python enthusiasts and professionals, offering an unparalleled opportunity to dive deep into the world of Python and explore its limitless potential.
              Stay tuned for updates!
              </p>
              <div className="row register-btn">
                <div className="col-md-5 col-8 pt-3">
                  <Button
                    buttonClassName="green-btn buy-ticket register-btn-extra-padding"
                    anchorClassName="text-decoration-none text-light"
                    buttonLabel="Buy Tickets"
                    buttonHyperLink="https://konfhub.com/pyconindia2023#tickets"
                  />
                </div>
                <div className="col-md-5 col-8 pt-3">
                  <Button
                    buttonClassName="submit-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none"
                    buttonLabel="Call For Proposal"
                    buttonHyperLink="https://in.pycon.org/cfp/pycon-india-2023/proposals/"
                  />
                </div>
              </div>
              <h2 className="pt-5 mb-4 date-text">
                29 Sept - 02 Oct
                <Image
                  src={calendar}
                  alt=""
                  width="100%"
                  height="100%"
                  className="img-fluid"
                />
              </h2>
              <div className="row">
                {calendarData.map((calendar, index) => (
                  <div key={index} className="col-md-4">
                    <div className="conference">
                      <h3 className="fw-bolder">{calendar.title}</h3>
                      <p className="pt-2">{calendar.date}, {calendar.location}</p>
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

export default HeroBanner;
