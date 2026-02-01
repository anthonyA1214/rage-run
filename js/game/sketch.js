function setup() {
  let level = Game.getLevel();
  const canvas = createCanvas(level.cols * Game.cellSize, level.rows * Game.cellSize);
  canvas.parent("container");

  initPlayer();

  startTimer();
  updateDeathCount();
  updateOrbsCollected();
}

function draw() {
  background("#1E2939");

  drawArena();
  drawOrbs();
  drawExit();
  drawPlayer();
}


