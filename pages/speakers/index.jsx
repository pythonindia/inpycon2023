import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import SpeakerComponent from "components/speaker";
import keynoteSpeakers from "data/speakers/keynote.yml";
import featuredSpeakers from "data/speakers/featured.yml";
import workshopInstructors from "data/speakers/workshopInstructors.yml";

const SpeakerPage = () => {
  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Speakers</title>
      </Head>
      <Header />
      <div className="my-4 justify-center">
        <h1
          className="com-head text-center"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Speakers for the Event
        </h1>
        <SpeakerComponent
          speakers={keynoteSpeakers}
          showMicCreative={true}
          title="Keynote Speakers"
        />
        <SpeakerComponent
          speakers={featuredSpeakers}
          title="Featured Speakers"
        />
        <SpeakerComponent
          speakers={workshopInstructors}
          title="Workshop Instructors"
        />
      </div>
      <Footer />
    </>
  );
};

export default SpeakerPage;
