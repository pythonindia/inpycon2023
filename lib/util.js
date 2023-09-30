import moment from 'moment-timezone';

function isTimeBetween(startTimeStr, endTimeStr) {
  const currentTime = moment();
  const startTime = moment(startTimeStr, 'hh:mm AA');
  const endTime = moment(endTimeStr, 'hh:mm AA');

  return currentTime.isBetween(startTime, endTime);
}

module.exports = {
  isTimeBetween,
};
