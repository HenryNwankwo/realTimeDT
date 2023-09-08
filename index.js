const sDayOfWeek = document.querySelector('.s-day-of-week');

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
const currentDate = new Date();
let currentDayOfWeek = days[currentDate.getDay()];
sDayOfWeek.innerHTML = currentDayOfWeek;
