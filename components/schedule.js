import { Accordion, Card } from "react-bootstrap";
import ScheduleData from "../data/schedule.yml";
import React, { useState } from "react";

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
      <div className="container pb-3">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <h2
              className="com-head"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Conference Schedule
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
                    const { time, image, description, speaker, track } =
                      scheduleItem;
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

function ScheduleCard({ image, time, talks }) {
  return (
    <div className="row bt-bottom align-items-center pt-4 pb-4">
      <div className="col-md-2">
        <p className="mb-0 date-announced">{time}</p>
      </div>
      <div className="col-md-1 text-center">
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div className="col-md-9">
        <div className="row">
          {talks.map((talk, id) => {
            const talkLength = talks.length;
            return (
              <ScheduleTalk
                {...talk}
                size={Math.floor(12 / talkLength)}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScheduleTalk({ description, speaker, track, size }) {
  return (
    <>
      <div className={`col-${size} ${size == 1 || "text-center"}`}>
        <p className="mb-0 date-content">
          {description}
          {speaker && <span className="ft-weight"> By {speaker} </span>}
          {/* {track && <span className="rt-green text-white">{track}</span>} */}
        </p>
      </div>
    </>
  );
}

function ScheduleAccordion({ date, currentSchedule, id, handleTabClick }) {
  return (
    <Accordion key={id}
    className="d-block d-lg-none">
      <Accordion.Item eventKey={id} onClick={() => handleTabClick(id)}>
        <Accordion.Header>{date}</Accordion.Header>
        <Accordion.Body style={{padding: "1rem 0rem"}}>
          {currentSchedule.schedule.map((scheduleItem, idx) => {
            return scheduleItem.talks.map(talk => {
              return (
                <Card style={{ margin: '0.8rem 0' }} key={idx}>
                <Card.Body>
                  <Card.Title>{talk.description}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{scheduleItem.time}</Card.Subtitle>
                  {/* <Card.Text>
                    {talk.track}
                  </Card.Text> */}
                </Card.Body>
              </Card>
                // <div
                //   className="row bt-bottom align-items-center pt-4 pb-4"
                //   key={idx}
                // >
                //   <div className="col-md-3 col-5">
                //     <p className="mb-0 date-announced">{scheduleItem.time}</p>
                //   </div>
                //   <div className="col-md-2 col-2 text-center">
                //     <img src="images/icons/tab1.png" className="img-fluid" />
                //   </div>

                //   <div className="col-md-7 col-5" key={idx}>
                //     <p className="mb-0 date-content">{talk.description}</p>
                //   </div>
                // </div>
              );
            });
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConferenceSchedule;
