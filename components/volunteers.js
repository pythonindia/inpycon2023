import Link from "next/link";
import VolunteersData from "data/volunteers.yml";
import WorkgroupLeadsData from "data/workgroupLeads.yml";


const VolunteerInfo = (props) => {
  const volunteer = props.volunteer;
  return (
    <div className="col-md-6 col-sm-12">
      {
        volunteer.profileLink ?
          (<Link
            href={props.volunteer.profileLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <span
              className="volunteer-span">
              {volunteer.fullName}
            </span>
          </Link>) :
          (<span
            className="volunteer-span">
            {volunteer.fullName}
          </span>)
      }
    </div>
  )
}

const Volunteers = () => {
  const volunteersData = [...VolunteersData, ...WorkgroupLeadsData];

  const sortedVolunteersData = volunteersData.sort((a, b) => {
    // Convert names to uppercase for case-insensitive sorting
    const nameA = a.fullName.toUpperCase();
    const nameB = b.fullName.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="container py-4 justify-center">
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Meet Our Volunteers
      </h1>
      <div className="row my-4 text-center">
        <p>
          We are proud to introduce the dedicated individuals who make PyCon India 2023 possible through their unwavering commitment and passion for the Python community.
          We are incredibly grateful for their invaluable contributions and dedication to making this conference a resounding success.
          Their passion and hard work make this conference possible!
        </p>
      </div>
      <div className="row py-4 bg-volunteers">
        <div className="row px-4 capitalize">
          {sortedVolunteersData.map((volunteer, index) => (
            <VolunteerInfo key={index} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
