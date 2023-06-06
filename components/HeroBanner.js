import Image from 'next/image';
import React from 'react';

import Button from './button';
import calendar from "../public/images/calendar.png";
import logo from "../public/images/logo.png";


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
                The premier conference in India using and developing Python programming language.
                Stay tuned for further updates by subscribing to our announcements.
              </p>
              <div className='row register-btn'>
                <div className='col-md-5 col-8 pt-3'>
                  <Button
                    buttonClassName="green-btn register-btn-extra-padding"
                    anchorClassName="text-decoration-none text-light"
                    buttonLabel="Become A Volunteer"
                    buttonHyperLink="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
                  />
                </div>
                <div className='col-md-5 col-8 pt-3'>
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
                <Image src={calendar} alt="" width="100%" height="100%" className="img-fluid" />
              </h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="conference">
                    <h3 className="fw-bolder">CONFERENCE</h3>
                    <p className="pt-2">Sep 30th - Oct 1st, Hyderabad</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="workshop">
                    <h3 className="fw-bolder">WORKSHOP</h3>
                    <p className="pt-2">Sep 29th, Hyderabad</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dev">
                    <h3 className="fw-bolder">DEV SPRINTS</h3>
                    <p className="pt-2">Oct 2nd, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
