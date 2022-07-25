
function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}


function varPa(){
  window.location.reload();
}


var randomName =Math.floor(Math.random()*6)+ 1;
var ImageSource = "images/Dice" + randomName+ ".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ImageSource);

var randomName2 = Math.floor(Math.random()*6) +1;
var ImageSource2 = "images/Dice" + randomName2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ImageSource2);

if (randomName > randomName2) {
  document.querySelector("h1").innerHTML = "Player One Won👏👏"
}

else if (randomName < randomName2 ) {
  document.querySelector("h1").innerHTML = "Player Two Won👏👏";
}
else 
document.querySelector("h1").innerHTML = "Draw😕";