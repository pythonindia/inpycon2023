import moment from 'moment-timezone';

function isTimeBetween(startTimeStr, endTimeStr) {
  const currentTime = moment().tz('Asia/Kolkata');
  
  const startTime = moment(startTimeStr, 'hA').tz('Asia/Kolkata');
  const endTime = moment(endTimeStr, 'hA').tz('Asia/Kolkata');

  return currentTime.isBetween(startTime, endTime);
}

module.exports = {
  isTimeBetween,
};