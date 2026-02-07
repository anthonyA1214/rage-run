function showGameCompleteOverlay() {
  noLoop();
  const overlay = document.getElementById("overlay");
  const deathsElement = document.getElementById("overlay-deaths");
  const timeElement = document.getElementById("overlay-time");

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  deathsElement.textContent = `Total Deaths: ${Game.deathCount}`;
  timeElement.textContent = `Total Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  overlay.classList.remove("d-none");

}