function playMusic() {
  const audio = document.getElementsByClassName("music");
  audio[0].play();
  document.removeEventListener("click", playMusic);
}

document.addEventListener("click", playMusic);
