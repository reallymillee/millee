window.onload = function randomNumbers() {
  var numbers = [];
  var i;
  var rand;
  for (i = 1; i < 17; i++) {
    do {
      rand = Math.floor(Math.random() * 16 + 1);
    } while (jQuery.inArray(rand, numbers) !== -1);
    numbers.push(rand);
    var value = "num" + i;
    document.getElementById(value).innerHTML = rand;
  }
  check();
};

function swapValues(number) {
  $("#" + number).addClass("is-primary");
  var a = document.getElementById("temp").innerHTML;
  if (a == "") {
    document.getElementById("temp").innerHTML = document.getElementById(number).innerHTML;
    document.getElementById("temp1").innerHTML = number;
  } else {
    var store = document.getElementById("temp1").innerHTML;
    document.getElementById(store).innerHTML = document.getElementById(number).innerHTML;
    document.getElementById(number).innerHTML = document.getElementById("temp").innerHTML;
    $("#" + number).removeClass("is-primary");
    $("#" + store).removeClass("is-primary");
    document.getElementById("temp").innerHTML = "";
    document.getElementById("temp1").innerHTML = "";
    check();
  }
}

function check() {
  var i = 1;
  var value;
  do {
    value = "num" + i;
    var verify = document.getElementById(value).innerHTML;
    console.log(verify, " ", i);
    if (verify == i) {
      i++;
    } else {
      break;
    }
  } while (i < 17);
  var progress = ((i - 1) / 16) * 100;
  console.log((i - 1), " ", progress);
  $("#progress").attr("value", progress);
  if (progress == 100) {
    $("#congrats").addClass("is-active");
  }
}

function refreshPage() {
  window.location.reload();
}
