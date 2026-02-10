function hideAllOverlayContent() {
  document
    .querySelectorAll(".overlay-content")
    .forEach(el => el.classList.remove("show"));
}

function showGameCompleteOverlay() {
  noLoop();

  const overlay = document.getElementById("overlay");
  const content = document.getElementById("game-complete-content");
  const deathsElement = document.getElementById("overlay-deaths");
  const timeElement = document.getElementById("overlay-time");

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  deathsElement.textContent = `${Game.deathCount}`;
  timeElement.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  hideAllOverlayContent();

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    content.classList.add("show");
  });
}

function showPauseOverlay() {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("pause-content");

  hideAllOverlayContent();

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    content.classList.add("show");
  });
}

function removePauseOverlay() {
  const overlay = document.getElementById("overlay");

  hideAllOverlayContent();
  overlay.classList.remove("show");
}