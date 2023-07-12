import Button from "./button";

const CommunityPartners = () => {
  return (
    <section className="bg-community-partners home-section pb-5" id="community-partners">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          <h2 className="col-auto com-head text-white" data-aos="fade-down" data-aos-duration="1000">Community Partners</h2>
          <div className="col-auto">
            <div>
              <img className="community-partners-avatar" src="/2023/images/generic-illustrations/flip4.png" alt=""></img>
              <img className="community-partners-avatar" src="/2023/images/generic-illustrations/flip1.png" alt=""></img>
            </div>
            <div>
              <img className="community-partners-avatar" src="/2023/images/generic-illustrations/flip3.png" alt=""></img>
              <img className="community-partners-avatar" src="/2023/images/generic-illustrations/flip2.png" alt=""></img>
            </div>
          </div>
        </div>
        <p className="p-3 pt-md-5 pb-md-5 text-white">
          Join PyCon India&rsquo;s Community Partner Program and support the vibrant Python community in India. Become a partner and contribute to the growth of Python enthusiasts.
        </p>
        <div className="row register-btn justify-content-center w-100">
          <div className="col-lg-4 col-md-6 col-8 pt-3">
            <Button
              buttonClassName="custom-button green-btn"
              anchorClassName="text-decoration-none text-light"
              buttonLabel="Register"
              buttonHyperLink="https://docs.google.com/forms/d/e/1FAIpQLSeKJ0I9zM-Kq66NoRGgWgQjIFyVIMWALRpsS6AS2PIi2Z6NJw/viewform"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-8 pt-3">
            <Button
              buttonClassName="custom-button submit-btn"
              anchorClassName="text-decoration-none"
              buttonLabel="Download Prospectus"
              buttonHyperLink="https://drive.google.com/file/d/17P7CaYvOghF8WGm1QtVT6jK162SyTBph/view?usp=drive_link"
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default CommunityPartners;
