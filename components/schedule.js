import ScheduleData from '../data/schedule.yml';
import React, { useState } from 'react';


const ConferenceSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const currentSchedule = ScheduleData[selectedTab];

  return (
    <section className="bg-conference" id="schedule">
      <div className="container pb-3">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <h2 className="com-head">
              Conference Schedule <img src="images/sandwatch.png" alt="" className="img-fluid" />
            </h2>
            <ul className="nav nav-pills mb-3 pt-5" id="pills-tab" role="tablist">
              {ScheduleData.map((item, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${index === selectedTab ? 'active' : ''}`}
                    id={`pills-tab-${index}`}
                    type="button"
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
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                {currentSchedule.schedule.map((scheduleItem, idx) => (
                  <div className="row bt-bottom align-items-center pt-4 pb-4" key={idx}>
                    <div className="col-md-3">
                      <p className="mb-0 date-announced">{scheduleItem.time}</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={scheduleItem.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7">
                      <p className="mb-0 date-content">{scheduleItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSchedule;