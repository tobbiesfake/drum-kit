
//Detecting Button Press
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
}

//Detecting Keyboard Press
  document.addEventListener("keydown",function(press){
    makeSound(press.key);
    makeAnimation(press.key);
  });


//Make Sound
  function makeSound(key){
    switch (key) {
      case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
      case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
      case "s":
      var audio1 = new Audio("sounds/tom-3.mp3");
      audio1.play();
      break;
      case "d":
      var audio1 = new Audio("sounds/tom-4.mp3");
      audio1.play();
      break;
      case "j":
      var audio1 = new Audio("sounds/snare.mp3");
      audio1.play();
      break;
      case "k":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
      case "l":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
      default:
    }
  }

//Make Animation
  function makeAnimation(currentKey){
    activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
      activeKey.classList.remove("pressed");
    },80);
  }
