import React from "react";

const ConventionCenterSection = () => {
  return (
    <section className="bg-hall d-flex align-items-center">
      <div className="container">
        <div className="row pt-5 pb-5 align-items-center">
          <div className="col-lg-8 col-md-7 text-white text-center text-md-start">
            <h3 className="text-white hallhead">
              Jawaharlal Nehru Technological University Hyderabad
            </h3>
            <p className="text-white">Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085</p>
          </div>
          <div className="col-lg-4 col-md-5 text-center text-md-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3249696634384!2d78.38885227607479!3d17.49199398341322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3437ed8fd%3A0xbee11a361107ae67!2sJawaharlal%20Nehru%20Auditorium!5e0!3m2!1sen!2sin!4v1687286378815!5m2!1sen!2sin"
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

export default ConventionCenterSection;
