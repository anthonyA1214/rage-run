// ========== LEVEL =========
function updateLevel() {
  const levelElement = document.getElementById('level-number');

  if (!levelElement) return;

  let levelNumber = Game.currentLevel;

  levelElement.textContent = `LEVEL ${levelNumber + 1}/${Game.getTotalLevels()}`;
}

// ========== DEATH COUNT =========
function updateDeathCount() {
  const deathCountElement = document.getElementById('death-count');

  if (!deathCountElement) return;

  let deathCount = Game.deathCount;

  deathCountElement.textContent = `${deathCount}`;
}

let timeInSeconds = 3;
let timerInterval = null;

// =========== TIMER ============
function updateTimer() {
  const timeElement = document.getElementById('timer');
  
  if (!timeElement) return;

  if (!Game.isGamePaused && !Game.isGameFinished) {
    timeInSeconds += 1;
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// ============ ITEMS COLLECTED ============
function updateOrbsCollected() {
  const orbsElement = document.getElementById('orbs-collected');
  
  if (!orbsElement) return;

  const totalOrbs = Game.getTotalOrbs();
  orbsElement.textContent = `${Game.orbsCollected}/${totalOrbs}`;
}

