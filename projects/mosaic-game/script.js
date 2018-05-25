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
    // document.getElementById(value).innerHTML = rand;
    $(value).css("background-image", "url('projects/mosaic-game/" + rand + ".jpg')");
  }
  check();
};

function swapValues(number) {
  $("#" + number).addClass("is-primary");
  var a = $("temp").css("background-image"); //check temp
  if (a == "") {
    document.getElementById("temp").innerHTML = $(number).css("background-image"); // get number value
    document.getElementById("temp1").innerHTML = number; // get number location
  } else {
    var store = document.getElementById("temp1").innerHTML; // get number location
    $(store).css("background-image", ($(number).css("background-image")); // setting store to number
    $(number).css("background-image", ($("temp").css("background-image"));
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
    var verify = $(value).css("background-image");
    verify = stripJpg(value);
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
function stripJpg(value) {
  var num = $(value).css("background-image");
  num = num.replace(".jpg')","");
  num = num.replace("url('","");
  return num;
}
