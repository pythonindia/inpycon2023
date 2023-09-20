import Image from "next/image";
import Link from "next/link";

import IconComponent from "components/icons";
import NameAvatar from "components/nameAvatar";

const TalkDetail = (speaker) => {
  return (
    <>
      <span>Talk Details:</span>
      <ul className="ms-3">
        {speaker.proposalLink ?
          <li>Addressing: <Link target="_blank" href={speaker.proposalLink}>{speaker.proposalTitle}</Link></li> :
          <li>Addressing: {speaker.proposalTitle}</li>
        }
        {speaker.talkDate && <li>Date: {speaker.talkDate}</li>}
        {speaker.talkTime && <li>Time: {speaker.talkTime}</li>}
        {speaker.track && <li>Track: {speaker.track}</li>}

      </ul>
    </>
  )
}

const SpeakerDetail = ({ speaker, showHyperLink }) => {
  return (
    <div>
      <div className="container bg-speaker-bio-box">
        <div className="row bg-speaker-bio-header w-100">
          <div className="d-flex col-12 py-4 justify-content-center">
            {speaker.profilePicture ? (
              <Image
                src={speaker.profilePicture}
                alt={`Image of ${speaker.fullName}`}
                className="speaker-bio-image"
                width={400}
                height={400}
                priority
              />
            ) : (
              <NameAvatar
                className="speaker-bio-image"
                name={speaker.fullName}
              />
            )}
          </div>
          <div className="col-12 py-2 text-center">
            <h1>{speaker.fullName}</h1>
            <p>{speaker.title}</p>
          </div>
        </div>
        <div className="row bg-speaker-bio-about pt-4 px-4">
          <p dangerouslySetInnerHTML={{ __html: speaker.about }}></p>
          {speaker.proposalTitle &&
            <TalkDetail {...speaker} />}
        </div>
        <div className="d-flex justify-content-between bg-speaker-bio-social py-2 px-4">
          <div>
            {speaker.social.map((item, index) => (
              <span className="me-1" key={index}>
                <Link
                  href={item.link}
                  target="_blank"
                  aria-label={`Hyperlink to speaker's ${item.icon} profile.`}
                >
                  <IconComponent
                    className="my-1"
                    name={item.platform}
                    color="#fff"
                    backgroundColor="1f928d"
                  />
                </Link>
              </span>
            ))}
          </div>
          {showHyperLink && (
            <div>
              <span className="me-1 d-flex flex-end">
                <Link
                  href="/speakers/[id]"
                  as={`/speakers/${encodeURIComponent(
                    speaker.id.toLowerCase()
                  )}`}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <IconComponent
                    className="my-1"
                    name="newTab"
                    color="#fff"
                    backgroundColor="1f928d"
                  />
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetail;
