import Image from "next/image";
import keynoters from "../data/keynoters.yaml";
import MikeImage from "../public/images/mike.png";

export default function Keynoters() {
  return (
    <>
      <section className="bg-speakers" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
              <Image src={MikeImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          {/* members */}
          <div className="row top-up">
            {keynoters.keynoters.map((keynoter: any) => {
              const image = require(`../public/keynoters/${keynoter.img}`);
              return (
                <div key={keynoter.name} className="col-md-6">
                  <div className="bg-speakerbox bg-white p-3 p-md-5 mb-3 mb-md-5">
                    <div className="row align-items-center">
                      <div className="col-md-5 col-5">
                        <Image src={image} className="img-fluid" alt="" />
                      </div>
                      <div className="col-md-7 col-7">
                        <div className="speaker-boxcontent">
                          <h4>{keynoter.name}</h4>
                          <p>{keynoter.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
