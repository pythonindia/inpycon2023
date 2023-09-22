import Link from "next/link";
import PartnersData from "data/partners.yml";

const Partners = () => {
  return (
    <section className="home-section" id="partners">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          <h2 className="col-auto com-head" data-aos="fade-down" data-aos-duration="1000">Partners</h2>
        </div>
        <div className="row justify-content-center mt-3 py-5">
          {PartnersData.map((partner, index) => (
            <div className="col-md-3 col-6 bt-circle my-2 text-center" key={index}>
              <img
                src={partner.logo}
                className={`img-fluid partners-logo ${partner.paddingClass}`}
                alt={partner.name}
              />
              <p className="pt-2">{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Partners;
