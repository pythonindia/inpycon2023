import KeynoteData from "../data/keynote.yml";

const KeynoteComponent = () => {
  return (
    <>
      <section className="bg-speakers home-section" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head" data-aos="fade-down" data-aos-duration="1000">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
            <img src="/2023/images/mike.png" className="img-fluid vert-move"/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          <div className="row top-up">
          <div className="col-md-6">
            {/* First Column */}
            {KeynoteData
              .filter((_, index) => index % 2 === 0) // Filter even indices for the first column
              .map((speaker, index) => (
                <div
                  className="bg-speakerbox bg-white p-3 p-lg-5 mb-3 mb-md-5"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-md-5 col-5 ">
                      <img src={speaker.profilePicture} alt={speaker.fullName} className="img-fluid speaker-image" />
                    </div>
                    <div className="col-md-7 col-7">
                      <div className="speaker-boxcontent">
                        <h4>{speaker.fullName}</h4>
                        <p>{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-md-6">
            {/* Second Column */}
            {KeynoteData
              .filter((_, index) => index % 2 !== 0) // Filter odd indices for the second column
              .map((speaker, index) => (
                <div
                  className="bg-speakerbox bg-white p-3 p-lg-5 mb-3 mb-md-5"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-md-5 col-5">
                      <img src={speaker.profilePicture} alt={speaker.name} className="img-fluid speaker-image" />
                    </div>
                    <div className="col-md-7 col-7">
                      <div className="speaker-boxcontent">
                        <h4>{speaker.name}</h4>
                        <p>{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeynoteComponent;
