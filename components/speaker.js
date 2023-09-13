import Link from "next/link";

const SpeakerComponent = (props) => {
  const sortedSpeakers = props.speakers.sort((a, b) => {
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
    <>
      <section className="bg-speakers home-section my-5">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-2">
              <h2 className="com-text-white">{props.title}</h2>
            </div>
            {props.showMicCreative &&
              <div className="col-md-4 col-5 mikeimg">
                <img src="/2023/images/generic-illustrations/mike.png" className="img-fluid vert-move" alt="" />
              </div>}
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          <div className="row top-up justify-content-center">
            {sortedSpeakers.map((speaker, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <Link href="/speakers/[speakerFullName]"
                  as={`/speakers/${encodeURIComponent(speaker.fullName.toLowerCase().replace(/\s+/g, "-"))}`}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <div
                    className="bg-speakerbox bg-white py-3 ps-3 pe-2 mb-3"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="1000"
                    key={index}
                  >
                    <div className="row align-items-center w-100">
                      <div className="col-auto">
                        <img
                          src={speaker.profilePicture}
                          alt={speaker.fullName}
                          className="speaker-image"
                        />
                      </div>
                      <div className="col">
                        <h4>{speaker.fullName}</h4>
                        <p>{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

SpeakerComponent.defaultProps = {
  showMicCreative: false
};

export default SpeakerComponent;
