import { useRouter } from "next/router";
import KeynoteData from "../../data/keynote.yml";
import Header from "../../components/header";
import Footer from "../../components/footer";

const SpeakerPage = () => {
  const router = useRouter();
  const { speakerFullName } = router.query;
  const formattedSpeakerFullName = speakerFullName
    ? speakerFullName.replace(/-/g, " ")
    : "";
  const speaker = KeynoteData.find(
    (s) =>
      s.fullName.toLowerCase() === formattedSpeakerFullName.toLowerCase()
  );

  if (!speaker) {
    return (
      <>
        <Header />
        <section id="speaker">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 pt-3 pb-5">
                <h2 className="com-head">Speaker not found</h2>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section id="speaker">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-5">
              <div className="s1-image pt-5">
                <img
                  src={speaker.profilePicture}
                  className="img-fluid w-75 "
                  alt={speaker.fullName}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="col-md-12 pt-3 pb-5">
              <h2 className="com-head">{speaker.fullName}</h2>
            </div>
              <div className="s1-text p-2">
                <h2 className="mb-3">About the Speaker</h2>
                <p>{speaker.title}</p>
                <p className="lead w-75">{speaker.about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SpeakerPage;
