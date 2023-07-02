import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RegistrationSection = () => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <section className="bg-reg home-section" id="attend">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 text-white">
            <h2 className="com-head text-white" data-aos="fade-down" data-aos-duration="1000">
              Registrations
            </h2>
            <h3 className="pt-5 text-white">Hyderabad, 29 Sep - 02 Oct</h3>
            <p className="pt-4 text-white">
              Pycon India 2023 is the premier conference for Python enthusiasts and professionals,
              offering an unparalleled opportunity to dive deep into the world of python and explore
              its limitless potentials.
            </p>
            <div className="register-btn mt-5">
              <button className="green-btn">
                <a href="https://konfhub.com/pyconindia2023#tickets" className="text-decoration-none text-light">
                Buy Tickets
                </a>
              </button>
              <button className="submit-btn">
                <a href="https://in.pycon.org/cfp/pycon-india-2023/proposals/" className="text-decoration-none">
                Call For Proposal
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="row flip-ab-1">
              <div className="col-md-4">
                <Slider {...sliderSettings}>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip3.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip1.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip4.png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="row flip-ab-2">
              <div className="col-md-4">
                <Slider {...sliderSettings}>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip2.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip1.png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="row flip-ab-3">
              <div className="col-md-4">
                <Slider {...sliderSettings}>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip1.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip4.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip2.png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="row flip-ab-4">
              <div className="col-md-4">
                <Slider {...sliderSettings}>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip4.png" alt="" />
                  </div>
                  <div className="item text-center">
                    <img className='image-container' src="/2023/images/flip3.png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
