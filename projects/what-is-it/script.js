var date;
var day;
var month;
var year;
var leapYear;
var error;
function whatIsIt() {
  var user = document.getElementById("prompt").value;
  date = user.split("-");
  day = parseInt(date[2]);
  month = parseInt(date[1]);
  year = parseInt(date[0]);
  leapYear = true;
  var lastDay;
  error = false;
  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11:
      lastDay = 30;
      break;
    case 1:
    case 3:
    case 5:
    case 8:
    case 10:
    case 12:
      lastDay = 31;
      break;
    case 2:
      checkLeapYear();
      if (leapYear) {
        lastDay = 29;
      } else {
        lastDay = 28;
      }
      break;
    default:
      error = true;
      break;
  }
  console.log(day, month, year, lastDay, leapYear);
  if (error === false) {
    if ((day < 1) && (day > lastDay)) {
      error = true;
    }
  displayResults();
  }
};
function checkLeapYear() {
  var remainder = year%4;
  console.log(remainder, 1);
  if (remainder !== 0) {
    leapYear = false;
  } else {
    remainder = year%100;
    console.log(remainder, 2);
    if (remainder !== 0) {
      remainder = year%400;
      console.log(remainder, 3);
      if (remainder !== 0) {
        leapYear = false;
      } else {
        leapYear = true;
      }
    }
  }
}
function displayResults() {
  document.getElementById("leapYear").innerHTML = leapYear;
  document.getElementById("error").innerHTML = error;
}
