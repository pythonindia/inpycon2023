const RegistrationSection = () => {
    return (
      <section className="bg-reg" id="attend">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-6 text-white">
              <h2 className="com-head text-white">Registrations.</h2>
              <h3 className="pt-5 text-white">Hyderabad, 29 Sep - 02 Oct</h3>
              <p className="pt-4 text-white">
                Pycon India 2023 is the premier conference for Python enthusiasts
                and professionals, offering an unparalleled opportunity to dive
                deep into the world of python and explore its limitless potentials.
              </p>
              <div className="register-btn mt-5">
                <button className="green-btn">
                  <a href="#" className="text-decoration-none text-light">
                    Register Now
                  </a>
                </button>
                <button className="submit-btn">
                  <a href="#" className="text-decoration-none">
                    Submit your work
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div>
                <img src="images/flip1.png" className="flip-img1" alt="" />
              </div>
              <div>
                <img src="images/flip2.png" className="flip-img2" alt="" />
              </div>
              <div>
                <img src="images/flip3.png" className="flip-img3" alt="" />
              </div>
              <div>
                <img src="images/flip4.png" className="flip-img4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RegistrationSection;
  