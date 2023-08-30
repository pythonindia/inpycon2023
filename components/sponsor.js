import Button from "./button";
import SponsorData from "../data/sponsor.yml";

const SponsorComponent = () => {
  const sponsorTiers = Object.keys(SponsorData);

  return (
    <section className="bg-event home-section" id="sponsors">
      <div className="container pt-4">
        <div className="row justify-content-center align-items-center pt-5 pb-md-5">
          <div className="col-md-12">
            <h2 className="com-head" data-aos="fade-down" data-aos-duration="1000">
              Event Sponsors
              <img
                src="/2023/images/icons/handshake.png"
                alt=""
                className="img-fluid ps-3"
              />
            </h2>
          </div>
          <div className="col-md-8">
            <p className="pt-md-5 pb-5">
              PyCon India is completely driven by volunteers. Sponsoring the
              event helps to sustain and grow the conference as well as the
              Community. Sponsor help in making the conference affordable, and
              maintaining the inventory for the conference.
            </p>
          </div>
          <div className="col-md-4 pb-md-0 pb-5 text-center">
            <Button
              buttonClassName="custom-button green-btn mx-auto"
              anchorClassName="text-decoration-none text-light"
              buttonLabel="Download Prospectus"
              buttonHyperLink="https://drive.google.com/file/d/1rIb3PLx9gUi-oWPdOdmldbHLy8Vaz-E2/view?usp=sharing"
            />
          </div>
        </div>
        {sponsorTiers.map(tier => (
          <div key={tier}>
            <div className="col-md-12 m-auto sp-sor text-center pt-5">
              <div className="sponsortitle">{tier.charAt(0).toUpperCase() + tier.slice(1)}</div>
            </div>
            <div className="row justify-content-center pt-5 pb-5">
              {SponsorData[tier].map((sponsor, index) => (
                <div className={`col-md-3 col-6 mb-md-0 mb-3 bt-circle ${SponsorData[tier].length === 1 ? 'mx-auto' : ''}`} key={index}>
                  <a href={sponsor.website} target="_blank" rel="noreferrer">
                    <img src={sponsor.logo} className={`img-fluid sponsor-logo sponsor-gap ${sponsor.paddingClass}`} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorComponent;
