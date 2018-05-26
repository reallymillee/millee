var date = (document.getElementById("prompt").value).split("-");
var day = date[2];
var month = date[1];
var year = date[0];
var mystery;
window.onload = function whatisit() {
  mystery = true; // 99% sure this is an error
  var lastDay;
  var error = false;
  switch(user) {
    case 4,6,9,11:
      lastDay = 30;
      break;
    case 1,3,5,8,10,12:
      lastDay = 31;
      break;
    case 2:
      checkMystery();
      if (mystery) {
        lastDay = 29;
      } else {
        lastDay = 28;
      }
    default:
      var error = true;
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
  var quotient = year\400;
  var remainder = year-(400*quotient);
  if (remainder == 0) {
    mystery = false;
  } else {
    quotient = year\100;
    remainder = year-(100*quotient);
    if (remainder >= 0) {
      quotient = year\4;
      remainder = year - (4*quotient);
      if (remainder == 0) {
        mystery = false;
      }
    }
  }
}
function displayResults() {
  document.getElementById("mystery").value = mystery;
  document.getElementById("error").value = error;
}
