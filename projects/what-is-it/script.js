var date;
var day;
var month;
var year;
var mystery;
var error;
function whatIsIt() {
  user = document.getElementById("prompt").value;
  date = date.split("-");
  day = date[2];
  month = date[1];
  year = date[0];
  mystery = true; // 99% sure this is an error
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
      checkMystery();
      if (mystery) {
        lastDay = 29;
      } else {
        lastDay = 28;
      }
      break;
    default:
      error = true;
      break;
  }
  if (error === false) {
    if ((day < 1) && (day > lastDay)) {
      error = true;
    }
  displayResults();
  }
};
function checkMystery() {
  mystery = false;
  var quotient = year/400;
  var remainder = year-(400*quotient);
  if (remainder === 0) {
    mystery = false;
  } else {
    quotient = year/100;
    remainder = year-(100*quotient);
    if (remainder >= 0) {
      quotient = year/4;
      remainder = year - (4*quotient);
      if (remainder === 0) {
        mystery = false;
      }
    }
  }
}
function displayResults() {
  document.getElementById("mystery").value = mystery;
  document.getElementById("error").value = error;
}
