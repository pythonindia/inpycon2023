import React from 'react';
import Image from "next/image";


const Journey: React.FC= () => {
  return(
<section className="bg-journey" id="journey">
<div className="container">
  <div className="row pt-5">
    <div className="col-md-12 pt-3 pb-5">
      <h2 className="com-head">Journey</h2>
    </div>
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slide-1 p-3">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-5">
                <div className="s1-image">
                  <img
                    src="public/images/s1.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="s1-text p-2">
                  <h2 className="mb-3">
                    1<sup>st</sup> Year Of Pycon India 2009
                  </h2>
                  <div className="venue d-flex mt-4 justify-content-between">
                    <div className="date">
                      <h6 className="fw-bolder">Date:</h6>
                      <p>26Th And 27Th September, 2009</p>
                    </div>
                    <div className="place">
                      <h6 className="fw-bolder">Location:</h6>
                      <p>Indian Institute Of Science, Bangalore</p>
                    </div>
                  </div>
                  <h6 className="fw-bolder mt-4">
                    Keynote Speaker: Prabhu Ramachandran
                  </h6>
                  <p>
                    pycon Indian 2009 Is A Community Conference By The
                    Python Developer Community. A Purely Volunteer
                    Effort, It Is Being Hosted For First Time In India,
                    And Will Attract Some Of The Best Python Developers
                    In India And Abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-1 p-3">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-5">
                <div className="s1-image">
                  <img
                    src="public/images/s1.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="s1-text p-2">
                  <h2 className="mb-3">
                    1<sup>st</sup> Year Of Pycon India 2009
                  </h2>
                  <div className="venue d-flex mt-4 justify-content-between">
                    <div className="date">
                      <h6 className="fw-bolder">Date:</h6>
                      <p>26Th And 27Th September, 2009</p>
                    </div>
                    <div className="place">
                      <h6 className="fw-bolder">Location:</h6>
                      <p>Indian Institute Of Science, Bangalore</p>
                    </div>
                  </div>
                  <h6 className="fw-bolder mt-4">
                    Keynote Speaker: Prabhu Ramachandran
                  </h6>
                  <p>
                    pycon Indian 2009 Is A Community Conference By The
                    Python Developer Community. A Purely Volunteer
                    Effort, It Is Being Hosted For First Time In India,
                    And Will Attract Some Of The Best Python Developers
                    In India And Abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-1 p-3">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-5">
                <div className="s1-image">
                  <img
                    src="public/images/s1.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="s1-text p-2">
                  <h2 className="mb-3">
                    1<sup>st</sup> Year Of Pycon India 2009
                  </h2>
                  <div className="venue d-flex mt-4 justify-content-between">
                    <div className="date">
                      <h6 className="fw-bolder">Date:</h6>
                      <p>26Th And 27Th September, 2009</p>
                    </div>
                    <div className="place">
                      <h6 className="fw-bolder">Location:</h6>
                      <p>Indian Institute Of Science, Bangalore</p>
                    </div>
                  </div>
                  <h6 className="fw-bolder mt-4">
                    Keynote Speaker: Prabhu Ramachandran
                  </h6>
                  <p>
                    pycon Indian 2009 Is A Community Conference By The
                    Python Developer Community. A Purely Volunteer
                    Effort, It Is Being Hosted For First Time In India,
                    And Will Attract Some Of The Best Python Developers
                    In India And Abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
<div className="container-fluid p-0">
  <div className="pt-5">
    <img src="public/images/journey.png" className="img-fluid" alt="" />
  </div>
</div>
</section>
  )
}
export default Journey;