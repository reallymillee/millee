var day;
var month;
var year;
var leapYear;
var lastDay;
var dayValid = true;
var monthValid = true;

function whatIsIt() {
  day = parseInt(document.getElementById("day").value);
  month = parseInt(document.getElementById("month").value);
  year = parseInt(document.getElementById("year").value);
  //  leapYear = true;
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
      monthValid = false;
      break;
  }
    if ((day < 1) || (day > lastDay)) {
      dayValid = false;
    }
  displayResults();
};

function checkLeapYear() {
  if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
    leapYear = true;
  } else {
    leapYear = false;
  }
}

function success(target) {
  if (($(target).hasClass("is-success")) === false) {
    if (($(target).hasClass("is-danger")) {
        $(target).removeClass("is-danger")
      }
      $(target).addClass("is-success");
    }
  }

function error(target) {
  if (($(target).hasClass("is-danger")) === false) {
    if (($(target).hasClass("is-success")) {
      $(target).removeClass("is-success")
    }
    $(target).addClass("is-danger");
  }
}

function displayResults() {
  if (dayValid === true) {
    success("#day");
  } else {
    error("#day");
  }
  if (monthValid === true) {
    success("#month");
  } else {
    error("#month");
  }
}
