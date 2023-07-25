function removeTransition(event) {
  if (event.propertyName !== "transform") return; // skip it if it;s not a transform
  event.target.classList.remove("playing")
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if(!audio) return; //stop function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play()
  
  key.classList.add("playing")
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);