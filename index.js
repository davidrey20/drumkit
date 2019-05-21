// Add Event Listener to all buttons on click
document.querySelectorAll(".drum").forEach((button, index) => {
  button.addEventListener("click", function() {
    //   Change text color to white on click
    changeColor(button.textContent);
    // Play specific sound on clik
    playDrumSound(button.textContent);
  });
});

// Add event listener to all buttons on key pressed
document.addEventListener("keydown", event => {
  changeColor(event.key);
  playDrumSound(event.key);
});

// Play sound function

function playDrumSound(pressedLetter) {
  switch (pressedLetter) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

// Modify the color of text drum to white or red depending if is pressed or not
function changeColor(letterClicked) {
  var buttons = document.querySelectorAll(".drum");

  buttons.forEach(button => {
    if (button.textContent === letterClicked) {
      button.classList.add("text-white");
    } else {
      button.classList.remove("text-white");
    }
  });
}
