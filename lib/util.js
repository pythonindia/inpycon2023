import moment from 'moment-timezone';

function isTimeBetween(startTimeStr, endTimeStr) {
  const currentTime = moment().tz('Asia/Kolkata');
  
  const startTime = moment(startTimeStr, 'hA');
  const endTime = moment(endTimeStr, 'hA');

  return currentTime.isBetween(startTime, endTime);
}

module.exports = {
  isTimeBetween,
};