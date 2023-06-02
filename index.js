const audio = new Audio();
var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;



    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {


  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {


  switch (key) {
    case "Yarra Teri Yarri":
      audio.src = "sounds/yarra.mp3";
      audio.play();
      break;

      case "Tum jaise..":
        audio.src = 'sounds/tu jaise.mp3';
        audio.play();
        break;


    case "Bhagwaan aathe nahin":
      audio.src = 'sounds/bhagwan.mp3';
      audio.play();
      break;
    case "Play Next":
      audio.src = 'sounds/Play Next.mp3';
     audio.play();
        break;
        case "Play Now":
          audio.src = 'sounds/Play Now.mp3';
          audio.play();
          break;
      



    default: console.log(key);

  }
}



function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
