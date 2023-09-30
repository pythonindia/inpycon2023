import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Badge, Card, Stack } from "react-bootstrap";
import NameAvatar from "components/nameAvatar";
import SpeakerDetail from "components/speakerDetail";
import CustomModal from "./customModal";
import Button from "./button";
import ScheduleData from "data/schedule.yml";
import { isTimeBetween } from "../lib/util";

// group by array using a condition, param 1 -> array, param 2 -> function for filtering and grouping
const groupBy = (a, f) => a.reduce((x, c) => (x[f(c)] ??= []).push(c) && x, {});

const getTrackRoom = (num) => {
  switch (num) {
    default:
      return "";
    case 1:
      return "JN Auditorium (Track 1)";
    case 2:
      return "ECE Seminar Hall (Track 2)";
    case 3:
      return "JHUB Hall 1 (Track 3)";
    case 4:
      return "JHUB Hall 2 (Track 4)";
    case 5:
      return "JN Auditorium (Open Space 1)";
    case 6:
      return "JN Auditorium (Open Space 2)";
    case 7:
      return "Cafeteria";
    case 8:
      return "PyCon India 2023 Check-In Booth";
  }
};

const ConferenceSchedule = () => {
  const defaultScheduleIndex = 1
  const [selectedTab, setSelectedTab] = useState(defaultScheduleIndex);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const currentSchedule = ScheduleData[selectedTab];

  return (
    <section className="bg-conference home-section" id="schedule">
      <div className="container-fluid pb-3 p-md-4">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-auto py-2">
                <h2
                  className="com-head"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Schedule
                  <img
                    src="/2023/images/icons/sandwatch.png"
                    alt="sandwatch"
                    className="img-fluid"
                  />
                </h2>
              </div>
              <div className="col py-2">
                <Button
                  buttonHyperLink="https://drive.google.com/file/d/1Fb0UO-kDEzstHdNrPgmsl76TWwEhkDOC/view?usp=sharing"
                  openInNewTab={true}
                  anchorClassName="text-decoration-none text-light"
                  buttonClassName="custom-button green-btn"
                  buttonLabel="Download"
                />
              </div>
            </div>
            <ul
              className="nav nav-pills mb-3 pt-5"
              id="pills-tab"
              role="tablist"
            >
              {ScheduleData.map((item, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${index === selectedTab ? "active" : "nav-link-inactive"
                      }`}
                    id={`pills-tab-${index}`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${index}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${index}`}
                    aria-selected={index === 0}
                    onClick={() => handleTabClick(index)}
                    title={`${item.date}, ${item.title}`}
                  >
                    <span className="date-acc">{item.date}</span>
                    <br />
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content pt-3" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-tab"
              >
                <div className="row">
                  {currentSchedule.schedule.map((scheduleItem, idx) => {
                    const isLive = (selectedTab == defaultScheduleIndex && isEventLive(scheduleItem.time));
                    return (
                      <ScheduleCard
                        isLive={isLive}
                        {...scheduleItem}
                        date={currentSchedule.date}
                        scheduleIdx={idx}
                        key={`${currentSchedule.date}-${idx}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Mobile Accordion  */}
            <Accordion defaultActiveKey={["1"]} className="d-block d-lg-none">
              {ScheduleData.map((item, idx) => {
                return (
                  <ScheduleAccordion
                    key={idx}
                    id={idx}
                    defaultScheduleIndex={defaultScheduleIndex}
                    currentSchedule={currentSchedule}
                    handleTabClick={() => handleTabClick(idx)}
                    {...item}
                  />
                );
              })}
            </Accordion>
            {/* Mobile Accordion ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

function ScheduleCard({ time, date, talks, scheduleIdx, isLive }) {
  return (
    <div className="row bg-white align-items-center pt-4 pb-4 m-2 shadow-sm">
      <div className="col-md-2">
        <p className="mb-0 date-announced">{time}</p>
      </div>
      {/* <div className="col-md-1 text-center">
        <img src={image} className="img-fluid" alt="" />
      </div> */}
      <div className="col-md-10">
        <div className="row">
          {talks.map((talk, id) => {
            const talkLength = talks.length;
            return (
              <ScheduleTalk
                isLive={isLive}
                {...talk}
                size={Math.floor(12 / talkLength)}
                key={`${date}-${scheduleIdx}-${id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScheduleTalk({ title, speakers, track, size, proposalLink, isLive }) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);
  const handleOpenSpeakerModal = (id) => {
    setSelectedSpeakerId(id);
  };

  const handleCloseSpeakerModal = () => {
    setSelectedSpeakerId(null);
  };
  return (
    <>
      <div
        className={`row talk-card align-items-center p-2 pb-2 ${size > 1 || "border-bottom"
          }`}
        style={{ marginBottom: "0.8rem" }}
      >
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              {speakers &&
                speakers.map((speaker) => {
                  return (
                    <div key={speaker.id}>
                      <div
                        className="speaker-card p-1"
                        tabIndex={0}
                        onClick={() =>
                          speaker.about && handleOpenSpeakerModal(speaker.id)
                        }
                        onKeyDownCapture={(e) =>
                          speaker.about &&
                          e.key == "Enter" &&
                          handleOpenSpeakerModal(speaker.id)
                        }
                      >
                        {speaker.profilePicture ? (
                          <Image
                            src={speaker.profilePicture}
                            className="rounded-pill me-2"
                            width={64}
                            height={64}
                            alt={`Circular avatar containing an image of ${speaker.fullName}`}
                            loading="lazy"
                          />
                        ) : (
                          <NameAvatar
                            width={64}
                            height={64}
                            fontSize={18}
                            className="speaker-image me-2 d-inline-flex"
                            name={speaker.fullName}
                          />
                        )}
                        <span className="ft-weight talk-speaker talk-speaker-title">
                          {speaker.fullName}
                        </span>
                      </div>
                      <CustomModal
                        showModal={selectedSpeakerId == speaker.id}
                        handleClose={handleCloseSpeakerModal}
                      >
                        <SpeakerDetail speaker={speaker} showHyperLink={true} />
                      </CustomModal>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-8">
          {proposalLink ? (
            <Link
              className="talk-title"
              href={proposalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mb-0 date-content">{title}</p>
            </Link>
          ) : (
            <p className="mb-0 date-content">{title}</p>
          )}

          {track && (
            <Stack>
              <Badge bg="success" tabIndex={0} className="me-1 p-2">
                {getTrackRoom(track)}
              </Badge>
              {isLive && (
                <Badge bg="danger" className="p-2">
                  <span style={{ color: "#fff" }}>
                    Live
                    <span className="live-icon"></span>
                  </span>
                </Badge>
              )}
            </Stack>
          )}
        </div>
      </div>
    </>
  );
}

function ScheduleAccordion({
  date,
  currentSchedule,
  defaultScheduleIndex,
  id,
  handleTabClick,
  isLive,
}) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);
  const handleOpenSpeakerModal = (id) => {
    setSelectedSpeakerId(id);
  };

  const handleCloseSpeakerModal = () => {
    setSelectedSpeakerId(null);
  };

  return (
    <Accordion.Item eventKey={`${id}`} onClick={() => handleTabClick(id)}>
      <Accordion.Header>{date}</Accordion.Header>
      <Accordion.Body style={{ padding: "1rem 0rem" }}>
        {currentSchedule.schedule.map((scheduleItem, scheduleIdx) => {
          const isLive = (defaultScheduleIndex == id && isEventLive(scheduleItem.time));
          return scheduleItem.talks.map((talk, idx) => {
            return (
              <Card
                style={{ margin: "0.8rem 0" }}
                key={`${date}-${scheduleIdx}-${idx}`}
              >
                {talk.title.indexOf("Keynote") > -1 && (
                  <Card.Header className="bg-warning">Keynote</Card.Header>
                )}
                <Card.Body>
                  <Card.Subtitle className="mb-4">
                    {scheduleItem.time}
                    {isLive && (
                      <Badge bg="danger" className="float-end p-2">
                        <span style={{ color: "#fff" }}>
                          Live
                          <span className="live-icon"></span>
                        </span>
                      </Badge>
                    )}
                  </Card.Subtitle>
                  <Card.Title className="mb-2">
                    {talk.proposalLink ? (
                      <Link
                        className="text-decoration-none text-black"
                        href={talk.proposalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {talk.title}
                      </Link>
                    ) : (
                      <>{talk.title}</>
                    )}
                  </Card.Title>
                  {talk.track && (
                    <Stack>
                      <Badge
                        bg="success"
                        tabIndex={0}
                        style={{ fontSize: "1rem" }}
                      >
                        {getTrackRoom(talk.track)}
                      </Badge>
                    </Stack>
                  )}
                  <Card.Body className="pt-1 ps-0">
                    {/* {talk.speakersPlaceHolder ? (
                        <span>By {talk.speakersPlaceHolder}</span>
                      ) : (
                        talk.speakers && <span>{"By "}</span>
                      )} */}
                    {talk.speakers &&
                      talk.speakers.map((speaker) => (
                        <div key={`${speaker.id}`}>
                          <div
                            className="col pt-2 mt-2"
                            onClick={() =>
                              speaker.about &&
                              handleOpenSpeakerModal(speaker.id)
                            }
                            tabIndex={0}
                          >
                            {speaker.profilePicture ? (
                              <Image
                                className="rounded-pill me-2"
                                src={speaker.profilePicture}
                                alt={`Circular avatar containing an image of ${speaker.fullName}`}
                                width={48}
                                height={48}
                                loading="lazy"
                              />
                            ) : (
                              <NameAvatar
                                width={48}
                                height={48}
                                fontSize={18}
                                className="speaker-image me-2 d-inline-flex"
                                name={speaker.fullName}
                              />
                            )}
                            <span key={speaker.id} className="ft-weight">
                              {speaker.fullName}
                            </span>
                          </div>
                          {speaker.about && (
                            <CustomModal
                              showModal={selectedSpeakerId == speaker.id}
                              handleClose={handleCloseSpeakerModal}
                            >
                              <SpeakerDetail
                                speaker={speaker}
                                showHyperLink={true}
                              />
                            </CustomModal>
                          )}
                        </div>
                      ))}
                  </Card.Body>
                </Card.Body>
              </Card>
            );
          });
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
}

function isEventLive(time) {
  const [startTime, endTime] = time.split("-");
  return isTimeBetween(startTime, endTime);
}

export default ConferenceSchedule;
