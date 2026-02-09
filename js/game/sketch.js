let orbCollectedSound;

const basePath = location.hostname.includes("github.io") ? "/rage-run/" : "/";

function preload() {
  soundFormats("mp3", "ogg");
  orbCollectedSound = loadSound(
    basePath + "assets/sounds/arcade-ui-6-229503.mp3",
  );
}

function setup() {
  let level = Game.getLevel();
  const canvas = createCanvas(
    level.cols * level.cellSize,
    level.rows * level.cellSize,
  );
  canvas.parent("container");

  initPlayer();

  startTimer();
  updateDeathCount();
  updateOrbsCollected();
  updateLevel();
}

function draw() {
  background("#1E2939");
  noStroke();

  if (Game.isGameFinished === false || Game.isGamePaused === false) {
    updatePlayer();
    updateEnemies();

    drawArena();
    drawOrbs();
    drawExit();
    drawPlayer();
    drawEnemies();

    checkEnemyCollision();
  } else if (Game.isGamePaused === true) {
    showPauseOverlay();
  } else if (Game.isGameFinished === true) {
    showGameCompleteOverlay();
    drawPlayer();
  }
}
