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
              <div className="register-btn pt-4 pb-4">
                  <button class="green-btn">
                    <a href="https://konfhub.com/pyconindia2023#tickets" class="text-decoration-none text-light">Buy Tickets</a>
                  </button>
                  <button class="submit-btn">
                    <a href="https://in.pycon.org/cfp/pycon-india-2023/proposals/" class="text-decoration-none">Call For Proposal</a>
                  </button>
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
            <div class="col-lg-6 position-relative anim-sec">
              <div class="layer-1 animate glow delay-1"></div>
              <div class="layer-2 animate__animated animate__bounceInDown animate__delay-1s"></div>
              <div class="layer-3 animate glow delay-2"></div>
              <div class="layer-4 animate glow delay-3"></div>
              <div class="layer-5 animate glow delay-4"></div>
              <div class="layer-6 animate glow delay-5"></div>
              <div class="layer-7 "></div>
              <div class="layer-8 animate glow delay-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;