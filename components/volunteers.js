import VolunteersData from "../data/volunteers.yml";

const Volunteers = () => {
  const sortedVolunteersData = VolunteersData.sort((a, b) => {
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
            <div
              key={index}
              className="col-md-6 col-sm-12">
              <span
                className="volunteer-span">
                {volunteer.fullName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
