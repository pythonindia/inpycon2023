import React from "react";

const VenueSection = ({cls, title,name, address, link}) => {
  return (
    <section className={`bg-hall ${cls} d-flex align-items-center`}>
 
      <div className="container">
        <div className="row pt-5 pb-5 align-items-center">
          <div className="col-lg-8 col-md-7 text-white text-center text-md-start">
           <h1 className="text-white mb-4 com-head">{title}</h1>
            <h3 className="text-white hallhead">
              {name}
              </h3>
            <p className="text-white">
              {address}</p>
              </div>
          <div className="col-lg-4 col-md-5 text-center text-md-start">
            <iframe
              src={link}
              height={400}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default VenueSection;

