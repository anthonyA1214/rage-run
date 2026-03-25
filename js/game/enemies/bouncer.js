function updateBouncerEnemy(enemy) {
  const moveAmount = enemy.speed / 1000;
  const level = Game.getLevel();
  const radiusCells = (level.cellSize * 0.7) / 2 / level.cellSize;

  const newX = enemy.x + enemy.direction.x * moveAmount;
  const newY = enemy.y + enemy.direction.y * moveAmount;
  const centerX = newX + 0.5;
  const centerY = newY + 0.5;

  const testPoints = [
    [centerX - radiusCells, centerY],
    [centerX + radiusCells, centerY],
    [centerX, centerY - radiusCells],
    [centerX, centerY + radiusCells],
    [centerX - radiusCells, centerY - radiusCells],
    [centerX + radiusCells, centerY - radiusCells],
    [centerX - radiusCells, centerY + radiusCells],
    [centerX + radiusCells, centerY + radiusCells],
  ];

  let hitWall = false;
  for (const [x, y] of testPoints) {
    const col = Math.floor(x);
    const row = Math.floor(y);
    if (col < 0 || col >= Game.getCols() || row < 0 || row >= Game.getRows()) {
      hitWall = true;
      break;
    }
    if (level.arena[row * Game.getCols() + col] === 1) {
      hitWall = true;
      break;
    }
  }

  if (hitWall) {
    let angle = random(TWO_PI);
    enemy.direction.x = cos(angle);
    enemy.direction.y = sin(angle);
    enemy.lastBounce = millis();
  } else {
    enemy.x = newX;
    enemy.y = newY;
  }
}

function drawBouncer(enemy, centerX, centerY) {
  const level = Game.getLevel();
  const size = level.cellSize * 0.7;
  const hue = (atan2(enemy.direction.y, enemy.direction.x) + PI) / TWO_PI;
  const timeSinceBounce = millis() - (enemy.lastBounce || 0);
  const brightness = timeSinceBounce < 200 ? 255 : 180;
  const glowStrength = timeSinceBounce < 200 ? 25 : 15;

  colorMode(HSB);
  fill(hue * 360, 80, brightness);
  drawingContext.shadowBlur = glowStrength;
  drawingContext.shadowColor = `hsl(${hue * 360}, 80%, 50%)`;

  push();
  translate(centerX, centerY);
  rotate(atan2(enemy.direction.y, enemy.direction.x));

  beginShape();
  for (let i = 0; i < 8; i++) {
    const a = (TWO_PI / 8) * i;
    const r = size / 2;
    vertex(cos(a) * r, sin(a) * r);
  }
  endShape(CLOSE);
  pop();

  drawingContext.shadowBlur = 0;
  colorMode(RGB);
}
