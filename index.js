const sDayOfWeek = document.querySelector('.s-day-of-week');
const utcTime = document.getElementById('UTC-time');

const currentDate = new Date();

//calculating current day of the week
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let currentDayOfWeek = days[currentDate.getDay()];
sDayOfWeek.innerHTML = currentDayOfWeek;

//Calculating UTC time in milliseconds

let utcTimeInMilliseconds = `${currentDate.getUTCMilliseconds()} ms`;

utcTime.innerHTML = utcTimeInMilliseconds;
