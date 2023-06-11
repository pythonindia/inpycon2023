import Button from "./button";
import SponsorData from "../data/sponsor.yml";

const SponsorComponent = () => {
  return (
    <section className="bg-event" id="sponsors">
      <div className="container pt-4">
        <div className="row justify-content-center align-items-center pt-5 pb-md-5">
          <div className="col-md-12">
            <h2 className="com-head">
              Event Sponsors{" "}
              <img
                src="images/handshake.png"
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
              buttonClassName="green-btn"
              anchorClassName="text-decoration-none text-light"
              buttonLabel="Download Prospectus"
              buttonHyperLink="#"
              disabled={true}
            />
          </div>
        </div>
        {/* <div className="col-md-12 m-auto sp-sor text-center pt-5">
            <div className="sponsortitle">Platinum</div>
          </div>
          <div className="row pt-5 pb-5">
            {SponsorData.platinum.map((image, index) => (
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle" key={index}>
                <img src={image} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
          <div className="col-md-12 m-auto sp-sor text-center pt-md-5">
            <div className="sponsortitle">Gold</div>
          </div>
          <div className="row pt-5 pb-5">
            {SponsorData.gold.map((image, index) => (
              <div className="col-md-3 col-6 mb-md-0 mb-3 bt-circle" key={index}>
                <img src={image} className="img-fluid" alt="" />
              </div>
            ))}
          </div> */}
      </div>
    </section>
  );
};

export default SponsorComponent;
