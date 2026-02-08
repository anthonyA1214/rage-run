function updatePatrolEnemy(enemy, moveAmount) {
  enemy.x += enemy.direction.x * moveAmount;
  enemy.y += enemy.direction.y * moveAmount;

  if (enemy.x < Math.min(enemy.start.x, enemy.end.x) ||
      enemy.x > Math.max(enemy.start.x, enemy.end.x) ||
      enemy.y < Math.min(enemy.start.y, enemy.end.y) ||
      enemy.y > Math.max(enemy.start.y, enemy.end.y)) {
    enemy.direction.x *= -1;
    enemy.direction.y *= -1;
  }
}

function drawPatrol(enemy, centerX, centerY) {
  fill('#EF4444');

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#EF4444';

  ellipse(centerX, centerY, Game.cellSize * 0.75);

  drawingContext.shadowBlur = 0;
}