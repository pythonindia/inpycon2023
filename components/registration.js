import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RegistrationSection = () => {
  const sliderSettings = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1030: {
        items: 1,
      },
    },
  };

  return (
    <section className="bg-reg" id="attend">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 text-white">
            <h2
              className="com-head text-white"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Registrations
            </h2>
            <h3 className="pt-5 text-white">Hyderabad, 29 Sep - 02 Oct</h3>
            <p className="pt-4 text-white">
              Pycon India 2023 is the premier conference for Python enthusiasts
              and professionals, offering an unparalleled opportunity to dive
              deep into the world of python and explore its limitless
              potentials.
            </p>
            <div className="register-btn mt-5">
              <button className="green-btn">
                <a
                  href="https://konfhub.com/pyconindia2023#tickets"
                  className="text-decoration-none text-light"
                >
                  Buy Tickets
                </a>
              </button>
              <button className="submit-btn">
                <a
                  href="https://in.pycon.org/cfp/pycon-india-2023/proposals/"
                  className="text-decoration-none"
                >
                  Call For Proposal
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="row flip-ab-1">
              <div className="col-md-4">
                <OwlCarousel
                  id="owl-flip1"
                  className="pt-4 flip-img1"
                  {...sliderSettings}
                >
                  <div className="item text-center">
                    <img src="./2023/images/flip3.png" />
                  </div>
                  <div className="item text-center">
                    <img src="./2023/images/flip1.png" />
                  </div>
                  <div className="item text-center">
                    <img src="./2023/images/flip4.png" />
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div className="row flip-ab-2">
              <div className="col-md-4">
                <OwlCarousel
                  id="owl-flip2"
                  className="pt-4 flip-img2"
                  {...sliderSettings}
                >
                    <div className="item text-center">
                      <img src="./2023/images/flip2.png" />
                    </div>
                    <div className="item text-center">
                      <img src="./2023/images/flip1.png" />
                    </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="row flip-ab-3">
              <div className="col-md-4">
                <div id="owl-flip3" className="pt-4 flip-img3">
                  <OwlCarousel {...sliderSettings}>
                    <div className="item text-center">
                      <img src="./2023/images/flip1.png" />
                    </div>
                    <div className="item text-center">
                      <img src="./2023/images/flip4.png" />
                    </div>
                    <div className="item text-center">
                      <img src="./2023/images/flip2.png" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="row flip-ab-4">
              <div className="col-md-4">
                <OwlCarousel
                  id="owl-flip4"
                  className="pt-4 flip-img4"
                  {...sliderSettings}
                >
                    <div className="item text-center">
                      <img src="./2023/images/flip4.png" />
                    </div>
                    <div className="item text-center">
                      <img src="./2023/images/flip3.png" />
                    </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
