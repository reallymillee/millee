var date;
var day;
var month;
var year;
var leapYear;
var error;

function whatIsIt() {
  var day = parseInt(document.getElementById("day").value);
  var day = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("year").value);
//  leapYear = true;
  var lastDay;
  error = false;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      lastDay = 30;
      break;
    case 1:
    case 3:
    case 5:
    case 7: // fixed error
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
  console.log(day, month, year, lastDay, leapYear, error);
  if (error === false) {
    if ((day < 1) && (day > lastDay)) {
      error = true;
    }
    displayResults();
  }
};

function checkLeapYear() {
  if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
    leapYear = true;
  } else {
    leapYear = false;
  }
}

function displayResults() {
  document.getElementById("leapYear").innerHTML = leapYear;
  document.getElementById("error").innerHTML = error;
}
