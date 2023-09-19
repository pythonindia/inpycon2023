import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import Header from "components/header";
import Footer from "components/footer";
import SpeakerDetail from "components/speakerDetail";
import keynoteSpeakers from "data/speakers/keynote.yml";
import featuredSpeakers from "data/speakers/featured.yml";
import workshopInstructors from "data/speakers/workshopInstructors.yml";
import { fetchSpeakers } from "lib/data";

const SpeakerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const categorizedSpeakers = fetchSpeakers();
    const speakers = [
      ...categorizedSpeakers["keynoteSpeakers"],
      ...categorizedSpeakers["featuredSpeakers"],
      ...categorizedSpeakers["workshopInstructors"]];

    const findSpeaker = () => {
      const foundSpeaker = speakers.find(
        (s) => s.id.toLowerCase() === id.toLowerCase()
      );
      if (!foundSpeaker) {
        router.push("/404");
      }
      setSpeaker(foundSpeaker);
    };

    if (id) {
      findSpeaker();
    }
  }, [id, router]);

  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Speaker</title>
      </Head>
      {speaker && (
        <div id="speaker-info">
          <Header />
          <div className="container mt-5">
            <SpeakerDetail speaker={speaker} showHyperLink={false} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default SpeakerPage;
