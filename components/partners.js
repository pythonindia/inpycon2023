import Link from "next/link";
import PartnersData from "data/partners.yml";

const Partners = () => {
  return (
    <section className="home-section" id="partners">
      <div className="container pt-5 pb-5">
        <div className="row">
          <h2
            className="com-head"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Partners
          </h2>
        </div>
        <div className="row justify-content-center py-5">
          {PartnersData.map((partner, index) => (
            <div
              className="col-md-3 col-6 bt-circle my-2 text-center"
              key={index}
            >
              <a href={partner.website} target="_blank" rel="noreferrer">
                <img
                  src={partner.logo}
                  className={`img-fluid shadow-sm partners-logo ${partner.paddingClass}`}
                  alt={partner.name}
                />
              </a>
              <p className="pt-2">
                {partner.name} <br />(
                <span className="partner-title">{partner.title}</span>)
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
