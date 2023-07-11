import Image from "next/image";
import React from "react";

import calendar from "../public/images/icons/calendar.png";
import logo from "../public/images/logos/logo.png";
import calendarData from "../data/calendar.yml";
import Button from "./button";

const HeroBanner = () => {
  return (
    <section id="hero" className="bg-banner home-section">
      <div className="bg-banner-overlay">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 pb-5">
              <div className="d-none d-md-block text-center text-lg-start">
                <a href="#">
                  <Image src={logo} width="100%" height="100%" alt="" />
                </a>
              </div>
              <p className="pt-3 text-center text-lg-start">
                PyCon India 2023 is the premier conference for Python enthusiasts and professionals, offering an unparalleled opportunity to dive deep into the world of Python and explore its limitless potential.
                Stay tuned for updates!
              </p>
              <div className="row register-btn justify-content-center">
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonClassName="custom-button green-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none text-light"
                    buttonLabel="Buy Tickets"
                    buttonHyperLink="https://konfhub.com/pyconindia2023#tickets"
                  />
                </div>
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonClassName="custom-button submit-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none"
                    buttonLabel="Call For Proposal"
                    buttonHyperLink="https://in.pycon.org/cfp/pycon-india-2023/proposals/"
                  />
                </div>
              </div>
              <h2 className="pt-5 mb-4 date-text text-center">
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
            <div className="col-lg-6 position-relative anim-sec">
              <div className="layer-1 animate glow delay-1"></div>
              <div className="layer-2 animate__animated animate__bounceInDown animate__delay-1s"></div>
              <div className="layer-3 animate glow delay-2"></div>
              <div className="layer-4 animate glow delay-3"></div>
              <div className="layer-5 animate glow delay-4"></div>
              <div className="layer-6 animate glow delay-5"></div>
              <div className="layer-7 "></div>
              <div className="layer-8 animate glow delay-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
