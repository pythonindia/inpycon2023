import { Carousel, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import JourneyData from "../data/journey.yml";

const JourneyComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? JourneyData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === JourneyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % JourneyData.length);
    }, 10000); // Set the desired autoplay interval in milliseconds (e.g., 3000 for 3 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-journey" id="journey">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-12 pt-3 pb-5">
            <h2 className="com-head">Journey</h2>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {JourneyData.map((journey, index) => (
              <Carousel.Item key={index}>
                <div className="slide-1 p-3">
                  <div className="row align-items-center justify-content-around">
                    <div className="col-md-5">
                      <div className="s1-image">
                        <img
                          src={journey.image}
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="s1-text p-2">
                        <h2 className="mb-3">
                          {journey.title} - {journey.year}
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
                        <p>{journey.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>  
      </div>
      <div className="container-fluid p-0">
        <div className="pt-5">
          <img src="images/journey.png" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default JourneyComponent;
