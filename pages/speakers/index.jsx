import Head from "next/head";
import { useState, useEffect } from "react";

import Header from "components/header";
import Footer from "components/footer";
import Speakers from "components/speakers";
import { fetchSpeakers } from "lib/data";


const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState({
    keynoteSpeakers: [],
    featuredSpeakers: [],
    workshopInstructors: []
  });

  useEffect(() => {
    const categorizedSpeakers = fetchSpeakers();
    setSpeakers(categorizedSpeakers);
  }, []);

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
        <Speakers speakers={speakers["keynoteSpeakers"]} showMicCreative={true} title="Keynote Speakers" />
        <Speakers speakers={speakers["featuredSpeakers"]} title="Speakers" />
        <Speakers speakers={speakers["workshopInstructors"]} title="Workshop Instructors" />
      </div>
      <Footer />
    </>
  );
};

export default SpeakersPage;
