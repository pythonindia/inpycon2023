import Link from "next/link";
import localUserGroupsChaptersData from "data/localUserGroupsChapters.yml";


const LocalUserGroupsChapters = () => {
  return (
    <section className="bg-local-groups home-section" id="local-user-groups-chapters">
      <div className="container pt-5 pb-5">
        <div className="row">
          <h2 className="com-head text-white" data-aos="fade-down" data-aos-duration="1000">Local User Groups & Chapters</h2>
        </div>
        <div className="row justify-content-center mt-3 py-5">
          {localUserGroupsChaptersData.map((partner, index) => (
            <div className="col-md-3 col-6 bt-circle my-3" key={index}>
              <Link href={partner.website} target="_blank">
                <img
                  src={partner.logo}
                  className={`img-fluid local-group-logo ${partner.paddingClass}`}
                  alt={partner.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default LocalUserGroupsChapters;
