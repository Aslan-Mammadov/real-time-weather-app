const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
export const kelvinToF = (a) => {
  return Math.floor(a - 273.15);
};
export const dateYear = d.getFullYear();
export const dateMonth = months[d.getMonth()];
export const dateWeek = weekday[d.getDay()];
export const dateDay = d.getDate();
