import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import IconComponent from "../../components/icons";
import NameAvatar from "components/nameAvatar";
import keynoteSpeakers from "data/speakers/keynote.yml";
import featuredSpeakers from "data/speakers/featured.yml";
import workshopInstructors from "data/speakers/workshopInstructors.yml";

const SpeakerPage = () => {
  const router = useRouter();
  const { speakerFullName } = router.query;
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const speakers = [...keynoteSpeakers, ...featuredSpeakers, ...workshopInstructors];
    const findSpeaker = () => {
      const formattedSpeakerFullName = speakerFullName
        ? speakerFullName.replace(/-/g, " ")
        : "";
      const foundSpeaker = speakers.find(
        (s) =>
          s.fullName.toLowerCase() === formattedSpeakerFullName.toLowerCase()
      );
      if (!foundSpeaker) {
        router.push('/404');
      }
      setSpeaker(foundSpeaker);
    };

    if (speakerFullName) {
      findSpeaker();
    }
  }, [speakerFullName, router]);

  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Keynote Speaker</title>
      </Head>
      {speaker &&
        <div id="keynote">
          <Header />
          <div className="container bg-speaker-bio-box">
            <div className="my-4 bg-speaker-bio-header align-items-center w-100">
              <div className="row py-4 text-center justify-content-center">
                {speaker.profilePicture ?
                  <Image
                    src={speaker.profilePicture}
                    alt={speaker.fullName}
                    className="speaker-bio-image"
                    width={500}
                    height={500}
                  /> :
                  <NameAvatar className="speaker-bio-image" name={speaker.fullName} />
                }
              </div>
              <div className="row py-2 text-center">
                <h1>{speaker.fullName}</h1>
                <p>{speaker.title}</p>
              </div>
            </div>
            <div className="row bg-speaker-bio-about pt-4 px-4">
              <p dangerouslySetInnerHTML={{ __html: speaker.about }}></p>
              {speaker.proposalTitle && <p>Addressing: {speaker.proposalTitle}</p>
              }
            </div>
            <div className="bg-speaker-bio-social py-2 px-4">
              {speaker.social.map((item, index) =>
              (
                <span className="me-2" key={index}>
                  <Link href={item.link} target="_blank">
                    <IconComponent name={item.platform} color="#fff" backgroundColor="1f928d" />
                  </Link>
                </span>
              )
              )}
            </div>
          </div>
          <Footer />
        </div>
      }
    </>
  );
};

export default SpeakerPage;
