import KeynoteData from "../data/keynote.yml";

const KeynoteComponent = () => {
  return (
    <>
      <section className="bg-speakers" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
              <img src="images/mike.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          <div className="row top-up">
            {KeynoteData.map((speaker, index) => (
              <div key={index} className="col-md-6">
                <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-5">
                      <img src={speaker.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 col-7">
                      <div className="speaker-boxcontent">
                        <h4>{speaker.name}</h4>
                        <p>{speaker.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeynoteComponent;
