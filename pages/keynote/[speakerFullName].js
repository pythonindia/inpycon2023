import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import KeynoteData from "../../data/keynote.yml";
import Header from "../../components/header";
import Footer from "../../components/footer";
import IconComponent from "../../components/icons";

const SpeakerPage = () => {
  const router = useRouter();
  const { speakerFullName } = router.query;
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const findSpeaker = () => {
      const formattedSpeakerFullName = speakerFullName
        ? speakerFullName.replace(/-/g, " ")
        : "";
      const foundSpeaker = KeynoteData.find(
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
      {speaker &&
        <div id="keynote">
          <Header />
          <div className="container bg-speaker-bio-box">
            <div className="row my-4 bg-speaker-bio-header align-items-center w-100">
              <div className="col-12 py-4 text-center">
                <Image
                  src={speaker.profilePicture}
                  alt={speaker.fullName}
                  className="speaker-bio-image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="col-12 py-2 text-center">
                <h1>{speaker.fullName}</h1>
                <p>{speaker.title}</p>
              </div>
            </div>
            <div className="row bg-speaker-bio-about pt-4 px-4">
              <p dangerouslySetInnerHTML={{ __html: speaker.about }}></p>
            </div>
            <div className="bg-speaker-bio-social py-2 px-4">
              {speaker.social.map((item, index) =>
              (
                <span className="me-2" key={index}>
                  <Link href={item.link} target="_blank">
                    <IconComponent name={item.platform} />
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
