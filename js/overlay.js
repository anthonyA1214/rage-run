function showGameCompleteOverlay() {
  noLoop();

  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("game-complete-content");
  const deathsElement = document.getElementById("overlay-deaths");
  const timeElement = document.getElementById("overlay-time");

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  deathsElement.textContent = `${Game.deathCount}`;
  timeElement.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // SHOW overlay (remove display:none)
  overlay.classList.remove("d-none");
  overlayContent.classList.remove("d-none");

  // trigger animations
  requestAnimationFrame(() => {
    overlay.classList.add("show");          // fade background
    overlayContent.classList.add("show");  // pop-up content
  });
}

function showPauseOverlay() {
  noLoop();

  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("pause-content");

  // SHOW overlay (remove display:none)
  overlay.classList.remove("d-none");
  overlayContent.classList.remove("d-none");

  // trigger animations
  requestAnimationFrame(() => {
    overlay.classList.add("show");          // fade background
    overlayContent.classList.add("show");  // pop-up content
  });
}