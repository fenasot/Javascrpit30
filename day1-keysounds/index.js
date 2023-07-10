function keydown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  const key = document.querySelector(`span[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransitionend(e) {
  if (e.propertyName !== "transform") return;
  //console.log(e); check it out
  this.classList.remove("playing");
}
