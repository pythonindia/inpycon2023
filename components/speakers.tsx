import React from 'react';
import Image from 'next/image';

const Speakers: React.FC = ()=>{
    return (
        <>
        <section className="bg-speakers" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
              <img src="public/images/mike.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-members">
        <div className="container">
          {/* members */}
          <div className="row top-up">
            <div className="col-md-6">
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Ines Montani</h4>
                      <p>Founder Explosion/Spacy Core Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Jake Vanderplas</h4>
                      <p>
                        Astronomer By Training; Author Of Python Data Science
                        Handbook; Developer At Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>David Beazley</h4>
                      <p>
                        Author Of The Python Essential Reference And Python
                        Cookbook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                <div className="row align-items-center">
                  <div className="col-md-5 col-5">
                    <img
                      src="public/images/speaker4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 col-7">
                    <div className="speaker-boxcontent">
                      <h4>Devi A S l</h4>
                      <p>Staff Engineer, Razorpay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
export default Speakers;