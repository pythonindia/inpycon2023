import { Accordion, Card } from "react-bootstrap";
import ScheduleData from "../data/schedule.yml";
import SpeakerDetail from "components/speakerDetail";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomModal from "./customModal";

// group by array using a condition, param 1 -> array, param 2 -> function for filtering and grouping
const groupBy = (a, f) => a.reduce((x, c) => (x[f(c)] ??= []).push(c) && x, {});

const ConferenceSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const currentSchedule = ScheduleData[selectedTab];

  return (
    <section className="bg-conference home-section" id="schedule">
      <div className="container-fluid pb-3 p-md-4">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
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
            <ul
              className="nav nav-pills mb-3 pt-5"
              id="pills-tab"
              role="tablist"
            >
              {ScheduleData.map((item, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${
                      index === selectedTab ? "active" : "nav-link-inactive"
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
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  {currentSchedule.schedule.map((scheduleItem, idx) => {
                    return <ScheduleCard {...scheduleItem} key={idx} />;
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Accordion  */}
            {ScheduleData.map((item, idx) => {
              return (
                <ScheduleAccordion
                  key={idx}
                  id={idx}
                  currentSchedule={currentSchedule}
                  handleTabClick={() => handleTabClick(idx)}
                  {...item}
                />
              );
            })}
            {/* Mobile Accordion ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

function ScheduleCard({ time, talks }) {
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
                {...talk}
                size={Math.floor(12 / talkLength)}
                key={`scheduleCard-${id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScheduleTalk({ title, speakers, track, size, proposalLink }) {
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
        className={`row talk-card align-items-center p-2 pb-2 ${
          size > 1 || "border-bottom"
        }`}
        style={{ marginBottom: "0.8rem" }}
      >
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              {speakers &&
                speakers.map((speaker, idx) => {
                  return (
                    <>
                      <div
                        key={`speaker-info-${idx}`}
                        className="speaker-card p-1"
                        tabIndex={0}
                        onClick={() => handleOpenSpeakerModal(speaker.id)}
                        onKeyDownCapture={(e) =>
                          e.key == "Enter" && handleOpenSpeakerModal(speaker.id)
                        }
                      >
                        <Image
                          src={speaker.profilePicture}
                          className="rounded-pill me-2"
                          width={64}
                          height={64}
                          alt={speaker.fullName}
                          title={speaker.fullName}
                          loading="lazy"
                        />
                        <span
                          key={speaker.id}
                          className="ft-weight talk-speaker talk-speaker-title"
                        >
                          {speaker.fullName}
                        </span>
                      </div>
                      <CustomModal
                        // key={`speaker-modal-${idx}`}
                        showModal={selectedSpeakerId == speaker.id}
                        handleClose={handleCloseSpeakerModal}
                      >
                        <SpeakerDetail speaker={speaker} showHyperLink={true} />
                      </CustomModal>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-8">
          <p className="mb-0 date-content">
            <a
              className="talk-title"
              href={proposalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

function ScheduleAccordion({ date, currentSchedule, id, handleTabClick }) {
  const [selectedSpeakerId, setSelectedSpeakerId] = useState(null);
  const handleOpenSpeakerModal = (id) => {
    setSelectedSpeakerId(id);
  };

  const handleCloseSpeakerModal = () => {
    setSelectedSpeakerId(null);
  };
  return (
    <Accordion key={id} className="d-block d-lg-none">
      <Accordion.Item eventKey={id} onClick={() => handleTabClick(id)}>
        <Accordion.Header>{date}</Accordion.Header>
        <Accordion.Body style={{ padding: "1rem 0rem" }}>
          {currentSchedule.schedule.map((scheduleItem, idx) => {
            return scheduleItem.talks.map((talk) => {
              return (
                <Card style={{ margin: "0.8rem 0" }} key={idx}>
                  <Card.Body>
                    <Card.Subtitle className="mb-4">
                      {scheduleItem.time}
                    </Card.Subtitle>
                    <Card.Title className="mb-2">
                      <a
                        className="text-decoration-none"
                        href={talk.proposalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {talk.title}
                      </a>
                    </Card.Title>
                    <Card.Text className="pt-1">
                      {/* {talk.speakersPlaceHolder ? (
                        <span>By {talk.speakersPlaceHolder}</span>
                      ) : (
                        talk.speakers && <span>{"By "}</span>
                      )} */}
                      {talk.speakers &&
                        talk.speakers.map((speaker, index) => (
                          <>
                            <div
                              key={`speaker-info-${index}`}
                              className="col pt-2 mt-2"
                              onClick={() => handleOpenSpeakerModal(speaker.id)}
                              tabIndex={0}
                            >
                              <Image
                                className="rounded-pill me-2"
                                src={speaker.profilePicture}
                                width={48}
                                height={48}
                              />
                              <span key={speaker.id} className="ft-weight">
                                {speaker.fullName}
                              </span>
                            </div>
                            <CustomModal
                              showModal={selectedSpeakerId == speaker.id}
                              handleClose={handleCloseSpeakerModal}
                            >
                              <SpeakerDetail
                                speaker={speaker}
                                showHyperLink={true}
                              />
                            </CustomModal>
                          </>
                        ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            });
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConferenceSchedule;
