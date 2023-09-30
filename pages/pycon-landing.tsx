import { useRouter } from "next/router";
import { useEffect } from "react";

import Footer from "components/footer";
import Header from "components/header";
import HeroBanner from "components/HeroBanner";
import JourneyComponent from "components/journey";
import SponsorComponent from "components/sponsor";
import CommunityPartners from "components/communityPartners";
import SubscribeSection from "components/subscribe";
import RegistrationSection from "components/registration";
import Partners from "components/partners";
import LocalUserGroupsChapters from "components/localUserGroups";
import Speakers from "components/speakers";
import VenueSection from "components/venue";

import { fetchSpeakers } from "lib/data";
import Link from "next/link";
import IconComponent from "@components/icons";
import Button from "@components/button";
export default function PyConIndiaWeb() {
  const speakers = fetchSpeakers();
  const router = useRouter();

  useEffect(() => {
    // Check if the hash is '#schedule'
    if (window.location.hash.includes('#schedule')) {
      // Redirect to the clean URL using router.replace
      router.replace('/schedule');
    }
  }, []);

  return (
    <div>
      <Header />
      <HeroBanner />
      <JourneyComponent />
      <Speakers
        speakers={speakers["keynoteSpeakers"]}
        showMicCreative={true}
        title="Keynote Speakers"
      />
      {/* Schedule CTA starts */}
      <div className="bg-conference home-section pt-4" id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2
                className="com-head aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                Schedule
                <img
                  src="/2023/images/icons/sandwatch.png"
                  alt="sandwatch"
                  className="img-fluid"
                />
              </h2>
            </div>
          </div>

          <div className="row pt-4 pb-5">
            <div className="col-md-6 register-btn col-sm-12 pt-2">
              <Button
                buttonHyperLink="/schedule/"
                openInNewTab={false}
                anchorClassName="text-decoration-none text-light"
                buttonClassName="custom-button green-btn"
                buttonLabel="View Schedule"
                icon={
                  <IconComponent
                    className="ms-2"
                    name="arrowRight"
                    padding={0}
                    size={20}
                  />
                }
              />
            </div>
            <div className="col-md-6 register-btn col-sm-12 pt-2">
              <Button
                buttonHyperLink="https://drive.google.com/file/d/1v2D2epgFrvH4E_Kr7qbFxNdSctAnjATQ/view?usp=sharing"
                openInNewTab={true}
                anchorClassName="text-decoration-none text-light"
                buttonClassName="custom-button green-btn"
                buttonLabel="Download Schedule"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Schedule CTA ends */}
      <RegistrationSection />
      <SponsorComponent />
      <CommunityPartners />
      <Partners />
      <LocalUserGroupsChapters />
      <VenueSection
        cls=""
        title="Workshop & Conference"
        name="Jawaharlal Nehru Technological University Hyderabad"
        address="Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085"
        link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3249696634384!2d78.38885227607479!3d17.49199398341322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3437ed8fd%3A0xbee11a361107ae67!2sJawaharlal%20Nehru%20Auditorium!5e0!3m2!1sen!2sin!4v1687286378815!5m2!1sen!2sin"
      />
      <br />
      <VenueSection
        cls="devsprint"
        title="DevSprints"
        name="Phenom People"
        address="Plot No.5&6, 6th floor, White Field Rd, Kondapur, Telangana 500084"
        link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.052961578723!2d78.37047500499521!3d17.457179040200018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf9837fcc3%3A0x7b4d3fb76ff8ad18!2sPhenom%20People%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1695550693670!5m2!1sen!2sin"
      />
      {/* <section className="bg-latest">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <h2 className="com-head">Latest Updates</h2>
          </div>
      <div className="col-md-6">
      <iframe
      style={{ border: 'none' }}
      data-tweet-url="https://twitter.com/pyconindia"
      src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/pyconindia%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20pyconindia%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"
    ></iframe>          </div>
          <div className="col-md-6">
            <iframe src="https://www.instagram.com/__pyconindia__/?hl=enembed" width="400" height="480" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>
      </div>
      </div>
    </section> */}
      {/* <SubscribeSection /> */}
      <Footer />
    </div>
  );
}