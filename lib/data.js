import scheduleData from "data/schedule.yml";

export const fetchSpeakers = () => {
  const mappedSpeakers = scheduleData.flatMap(daySchedule =>
    daySchedule.schedule.flatMap(session =>
      session.talks
        ? session.talks.flatMap(talk =>
          talk.speakers
            ? talk.speakers.map(speaker => ({
              ...speaker,
              proposalLink: talk.proposalLink,
              track: talk.track,
              talkDate: daySchedule.date,
              talkTime: session.time
            }))
            : []
        )
        : []
    )
  );

  const categorizedSpeakers = {
    keynoteSpeakers: mappedSpeakers.filter(speaker => speaker.id.includes('KS')),
    featuredSpeakers: mappedSpeakers.filter(speaker => speaker.id.includes('FS')),
    workshopInstructors: mappedSpeakers.filter(speaker => speaker.id.includes('WS')),
    tinkeringSpace: mappedSpeakers.filter(speaker => speaker.id.includes('TS')),
    youngLearnersWorkshop: mappedSpeakers.filter(speaker => speaker.id.includes('YLW'))
  };

  return categorizedSpeakers;
}
