import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import Speakers from "components/speakers";
import keynoteSpeakers from "data/speakers/keynote.yml";
import featuredSpeakers from "data/speakers/featured.yml";
import workshopInstructors from "data/speakers/workshopInstructors.yml";

const SpeakersPage = () => {
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
        <Speakers
          speakers={keynoteSpeakers}
          showMicCreative={true}
          title="Keynote Speakers"
        />
        <Speakers speakers={featuredSpeakers} title="Featured Speakers" />
        <Speakers speakers={workshopInstructors} title="Workshop Instructors" />
      </div>
      <Footer />
    </>
  );
};

export default SpeakersPage;
