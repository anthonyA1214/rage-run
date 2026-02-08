function updateChaserEnemy(enemy, moveAmount) {
  let dx = player.x - enemy.x;
  let dy = player.y - enemy.y;
  let distance = sqrt(dx * dx + dy * dy);
  if (distance > 0) {
    enemy.x += (dx / distance) * moveAmount;
    enemy.y += (dy / distance) * moveAmount;
  }
}

function drawChaser(enemy, centerX, centerY) {
  fill('#A855F7');
  let size = Game.cellSize * 0.75;
  
  let dx = player.x - enemy.x;
  let dy = player.y - enemy.y;
  let angle = atan2(dy, dx);
  
  push();
  translate(centerX, centerY);
  rotate(angle);

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#A855F7';

  triangle(
    size / 2, 0,
    -size / 2, -size / 3,
    -size / 2, size / 3
  );

  drawingContext.shadowBlur = 0;
  pop();
}