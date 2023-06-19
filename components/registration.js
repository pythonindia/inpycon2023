import Button from "./button";

const RegistrationSection = () => {
  return (
    <section className="bg-reg" id="attend">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 text-white">
            <h2 className="com-head text-white">Registrations.</h2>
            <h3 className="pt-5 text-white">Hyderabad, 29 Sep - 02 Oct</h3>
            <p className="pt-4 text-white">
              PyCon India 2023 is the premier conference for Python enthusiasts
              and professionals, offering an unparalleled opportunity to dive
              deep into the world of python and explore its limitless
              potentials.
            </p>
            <div className="row register-btn">
              <div className="col-md-5 col-8 pt-3">
                <Button
                  buttonClassName="green-btn"
                  anchorClassName="text-decoration-none text-light"
                  buttonLabel="Buy Ticket"
                  buttonHyperLink="#"
                  disabled={true}
                />
              </div>
              <div className="col-md-5 col-8 pt-3">
                <Button
                  buttonClassName="submit-btn"
                  anchorClassName="text-decoration-none"
                  buttonLabel="Call For Proposal"
                  buttonHyperLink="https://in.pycon.org/cfp/pycon-india-2023/proposals/"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div>
              <img src="/2023/images/flip1.png" className="flip-img1" alt="" />
            </div>
            <div>
              <img src="/2023/images/flip2.png" className="flip-img2" alt="" />
            </div>
            <div>
              <img src="/2023/images/flip3.png" className="flip-img3" alt="" />
            </div>
            <div>
              <img src="/2023/images/flip4.png" className="flip-img4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
