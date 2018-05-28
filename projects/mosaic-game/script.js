window.onload = function randomNumbers() {
  var numbers = [];
  var i;
  var rand;
  for (i = 1; i < 26; i++) {
    do {
      rand = Math.floor(Math.random() * 25 + 1);
    } while (jQuery.inArray(rand, numbers) !== -1);
    numbers.push(rand);
    var value = "num" + i;
    var image = "projects/mosaic-game/" + rand + ".jpg";
    document.getElementById(value).src = image;
  }
  check();
};

var moves = 0;
function move() {
  moves++;
  if (moves == 1) {
    document.getElementById("moves").innerHTML = moves + " move";
  } else {
    document.getElementById("moves").innerHTML = moves + " moves";
  }
}

function swapValues(number) {
  var numberID = "#" + number;
  $(numberID).addClass("selected");
  var a = document.getElementById("temp").innerHTML; //check temp
  if (a == "") {
    document.getElementById("temp").innerHTML = $(numberID).attr('src'); // get number value
    document.getElementById("temp1").innerHTML = number; // get number location
  } else {
    var numberStyle = $(numberID).attr('src'); // getting numberStyle
    var tempStyle = document.getElementById("temp").innerHTML; // getting tempStyle
    var store = document.getElementById("temp1").innerHTML; // get number location
    document.getElementById(store).src = numberStyle; // setting store to number
    document.getElementById(number).src = tempStyle; // setting number to temp
    $(numberID).removeClass("selected");
    $("#" + store).removeClass("selected");
    document.getElementById("temp").innerHTML = "";
    document.getElementById("temp1").innerHTML = "";
    check();
    move();
  }
}

function check() {
  var i = 1;
  var value;
  do {
    value = "#num" + i;
    var verify = stripJpg(value);
    console.log(verify, " ", i);
    if (verify == i) {
      i++;
    } else {
      break;
    }
  } while (i < 26);
  var progress = ((i - 1) / 25) * 100;
  console.log((i - 1), " ", progress);
  $("#progress").attr("value", progress);
  if (progress == 100) {
    $("#won").addClass("is-active");
    $("#congrats").addClass("is-active");
    $("#won").removeClass("hidden");
    $("#progress").removeClass("is-primary");
    $("#progress").addClass("is-success");
    var x = document.getElementsByTagName("th");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.border = "none";
      x[i].removeAttribute("onclick");
    }
  }
}

function refreshPage() {
  window.location.reload();
}

function stripJpg(value) {
  var num = $(value).attr('src');
  num = num.match(/\d+/)[0];
  return num;
}

function closeModal() {
  $("#congrats").removeClass("is-active");
}
