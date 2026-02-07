let orbCollectedSound;

const basePath = location.hostname.includes('github.io')
  ? '/rage-run/'
  : '/';

function preload() {
  soundFormats('mp3', 'ogg');
  orbCollectedSound = loadSound(
    basePath + 'assets/sounds/arcade-ui-6-229503.mp3'
  );
}

function setup() {
  let level = Game.getLevel();
  const canvas = createCanvas(level.cols * Game.cellSize, level.rows * Game.cellSize);
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

  if (Game.isGameFinished === false) {
    updatePlayer();
    updateEnemies();

    drawArena();
    drawOrbs();
    drawExit();
    drawPlayer();
    drawEnemies();
    
    checkEnemyCollision();
  } else {
    showGameCompleteOverlay();
    drawPlayer();
  }
}


