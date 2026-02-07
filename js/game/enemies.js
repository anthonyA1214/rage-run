function updateEnemies() {
  const level = Game.getLevel();
  
  if (!level.enemies) return;

  // Update enemy positions
  level.enemies.forEach(enemy => {
    let moveAmount = (enemy.speed / 1000);

    if (enemy.type === 'patrol') {

      enemy.x += enemy.direction.x * moveAmount;
      enemy.y += enemy.direction.y * moveAmount;
  
      if (enemy.x < enemy.start.x || enemy.x > enemy.end.x || enemy.y < enemy.start.y || enemy.y > enemy.end.y) {
        // Reverse direction
        enemy.direction.x *= -1;
        enemy.direction.y *= -1;
      }
    } else if (enemy.type === 'chaser') {
      let dx = player.x - enemy.x;
      let dy = player.y - enemy.y;
      let distance = sqrt(dx * dx + dy * dy);
      if (distance > 0) {
        enemy.x += (dx / distance) * moveAmount;
        enemy.y += (dy / distance) * moveAmount;
      }
    }
  });

}

function drawEnemies() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  level.enemies.forEach(enemy => {
    let centerX = enemy.x * Game.cellSize + Game.cellSize / 2;
    let centerY = enemy.y * Game.cellSize + Game.cellSize / 2;

    if (enemy.type === 'patrol') {
      fill('#EF4444');

      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = '#EF4444';
  
      ellipse(centerX, centerY, Game.cellSize * 0.75);
  
      drawingContext.shadowBlur = 0;
    } else if (enemy.type === 'chaser') {
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
    
  }) 
}

function checkEnemyCollision() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  // Check collision with enemies
  for (let enemy of level.enemies) {
    let enemyX = Math.round(enemy.x);
    let enemyY = Math.round(enemy.y);
    if (enemyX === player.x && enemyY === player.y) {
      Game.resetLevel();
      break;
    }
  }
}