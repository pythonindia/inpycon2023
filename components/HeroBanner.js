import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import calendar from "../public/images/icons/calendar.png";
import logo from "../public/images/logos/logo.png";
import calendarData from "../data/calendar.yml";
import Button from "./button";
import Tooltip from "./tooltip";
import IconComponent from "./icons";

const HeroBanner = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const eventDate = new Date("2023-09-29T09:00:00+05:30");
    const timer = setInterval(() => {
      const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const eventEndDateTime = new Date("2023-10-02T18:00:00+05:30");
      const diff = eventDate.getTime() - today.getTime();
      if (today < eventEndDateTime) {
        if (diff <= 0) {
          setCountdown("Live!");
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="hero" className="bg-banner home-section">
      <div className="bg-banner-overlay">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 pb-5">
              <div className="d-md-block pycon-logo text-center text-lg-start">
                <h1 hidden>PyCon India 2023</h1>
                <a href="#">
                  <Image
                    src={logo}
                    width="100%"
                    height="100%"
                    alt="PyCon India, Hyderabad 2023 logo showing people and hyderabad charminar in the background"
                  />
                </a>
              </div>
              <p className="pt-3 text-center text-lg-start">
                PyCon India 2023 is the premier conference for Python
                enthusiasts and professionals, offering an unparalleled
                opportunity to dive deep into the world of Python and explore
                its limitless potential. Stay tuned for updates!
              </p>
              <div className="row register-btn justify-content-center">
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonHyperLink="https://drive.google.com/file/d/1tJhU8aUzafwE1t21ZlZj8gWuqJtR9Bke/view?usp=share_link"
                    openInNewTab={false}
                    anchorClassName="text-decoration-none text-light"
                    buttonClassName="custom-button green-btn"
                    buttonLabel="Download Program Guide"
                    // icon={
                    //   <IconComponent
                    //     className="ms-2"
                    //     name="arrowRight"
                    //     padding={0}
                    //     size={20}
                    //   />
                    // }
                  />
                </div>
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonHyperLink="https://drive.google.com/file/d/1v2D2epgFrvH4E_Kr7qbFxNdSctAnjATQ/view?usp=sharing"
                    openInNewTab={true}
                    anchorClassName="text-decoration-none text-light"
                    buttonClassName="custom-button green-btn"
                    buttonLabel="Download Schedule"
                  />
                </div>
              </div>
              <div className="row register-btn justify-content-center">
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonClassName="custom-button submit-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none text-light"
                    buttonLabel="Call For DevSprints"
                    buttonHyperLink="https://in.pycon.org/cfp/devsprint-2023/proposals/"
                  />
                </div>
                <div className="col-md-6 col-8 pt-3">
                  <Button
                    buttonClassName="custom-button submit-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none"
                    buttonLabel="Submit .extend() Tracks"
                    buttonHyperLink="https://forms.gle/xwtfwXF6y1Us9FBK9"
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
              <h3 className="  mb-4 date-text text-center">{countdown}</h3>
              <div className="row">
                {calendarData.map((calendar, index) => (
                  <div key={index} className="col-md-4">
                    <div className="conference">
                      <h3 className="fw-bolder">{calendar.title}</h3>
                      <p className="pt-2">
                        {calendar.date}, {calendar.location}
                      </p>
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
