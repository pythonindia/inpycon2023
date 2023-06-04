import Image from 'next/image';
import React from 'react';

import ButtonComponent from './button';
import logo from "../public/images/logo.png";
import calendar from "../public/images/calendar.png";


const HeroBannerComponent = () => {
  return (
    <section className="bg-banner">
      <div className="bg-banner-overlay">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-6">
              <div className="d-none d-md-block">
                <a href="#">
                <Image src={logo} width="100%" height="100%"  alt=""/>
                </a>
              </div>
              <p className="pt-3 text-center text-md-start">
                The premier conference in India using and developing Python programming language.
                Stay tuned for further updates by subscribing to our announcements.
              </p>
              {/* btn */}
              <div className="register-btn pt-3">
                <ButtonComponent 
                buttonClassName = "green-btn"
                anchorClassName = "text-decoration-none text-light"
                buttonLabel = "Buy Tickets"
                buttonHyperLink = "#"
                disabled={true}
                />
                <ButtonComponent 
                buttonClassName = "submit-btn"
                anchorClassName = "text-decoration-none"
                buttonLabel = "Call For Proposal"
                buttonHyperLink = "https://in.pycon.org/cfp/pycon-india-2023/proposals/"
                />
              </div>
              <h2 className="pt-5 mb-4 date-text">
                29 Sept - 02 Oct
                <Image src={calendar} alt="" width="100%" height="100%" className="img-fluid"/>
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
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerComponent;
