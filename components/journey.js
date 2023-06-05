import JourneyData from '../data/journey.yml';

const JourneyComponent = () => {
  return (
    <section className="bg-journey" id="journey">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-12 pt-3 pb-5">
            <h2 className="com-head">Journey</h2>
          </div>       
          <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
              {JourneyData.map((journey, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="slide-1 p-3">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-md-5">
                        <div className="s1-image">
                          <img src={journey.image} className="img-fluid w-100" alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="s1-text p-2">
                          <h2 className="mb-3">
                            {journey.title} {journey.year}
                          </h2>
                          <div className="venue d-flex mt-4 justify-content-between">
                            <div className="date">
                              <h6 className="fw-bolder">Date:</h6>
                              <p>{journey.date}</p>
                            </div>
                            <div className="place">
                              <h6 className="fw-bolder">Location:</h6>
                              <p>{journey.location}</p>
                            </div>
                          </div>
                          <h6 className="fw-bolder mt-4">
                            Keynote Speaker: {journey.speaker}
                          </h6>
                          <p>
                            {journey.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>          
        </div>
      </div>
      <div className="container-fluid p-0"> 
        <div className="pt-5"><img src='images/journey.png' className="img-fluid" /></div>
      </div>
    </section>
  );
};

export default JourneyComponent;
