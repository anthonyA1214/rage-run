let player;
let velX = 0;
let velY = 0;
const SPEED = 0.1;

function initPlayer() {
  const start = Game.getLevel().playerStart;
  player = { x: start.x, y: start.y };
}

function updatePlayer() {
  velX = 0;
  velY = 0;

  if (keyIsDown(87) || keyIsDown(UP_ARROW)) velY = -SPEED; // W or ↑
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) velY = SPEED; // S or ↓
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) velX = -SPEED; // A or ←
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) velX = SPEED; // D or →

  // Normalize diagonal speed
  if (velX !== 0 && velY !== 0) {
    velX *= 0.7071;
    velY *= 0.7071;
  }

  // Slide-along-wall collision: try each axis independently
  if (!collidesWithWall(player.x + velX, player.y)) player.x += velX;
  if (!collidesWithWall(player.x, player.y + velY)) player.y += velY;

  // Clamp inside grid just in case
  player.x = constrain(player.x, 0, Game.getCols() - 1);
  player.y = constrain(player.y, 0, Game.getRows() - 1);

  checkOrbCollection();
  checkExit();
  checkEnemyCollision();
}

function collidesWithWall(px, py) {
  const level = Game.getLevel();
  const radiusCells = (level.cellSize * 0.7) / 2 / level.cellSize;
  const centerX = px + 0.5;
  const centerY = py + 0.5;

  const testPoints = [
    [centerX - radiusCells, centerY], // left
    [centerX + radiusCells, centerY], // right
    [centerX, centerY - radiusCells], // top
    [centerX, centerY + radiusCells], // bottom
    [centerX - radiusCells, centerY - radiusCells], // top-left
    [centerX + radiusCells, centerY - radiusCells], // top-right
    [centerX - radiusCells, centerY + radiusCells], // bottom-left
    [centerX + radiusCells, centerY + radiusCells], // bottom-right
  ];

  for (const [x, y] of testPoints) {
    const col = Math.floor(x);
    const row = Math.floor(y);
    if (col < 0 || col >= Game.getCols() || row < 0 || row >= Game.getRows())
      return true;
    if (level.arena[row * Game.getCols() + col] === 1) return true;
  }
  return false;
}

function drawPlayer() {
  const level = Game.getLevel();
  const centerX = player.x * level.cellSize + level.cellSize / 2;
  const centerY = player.y * level.cellSize + level.cellSize / 2;
  const size = level.cellSize * 0.55;
  const radius = size * 0.3;

  fill("#00BEDA");
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = "#00BEDA";
  rect(centerX - size / 2, centerY - size / 2, size, size, radius);
  drawingContext.shadowBlur = 0;
}
