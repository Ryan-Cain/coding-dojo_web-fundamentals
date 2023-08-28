console.log("page loaded...");

function hoverOnPlay(element) {
  element.setAttribute("muted");
  element.play();
}

function hoverOffPause(element) {
  element.pause();
  element.removeAttribute("muted");
}
