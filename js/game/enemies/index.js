function updateEnemies() {
  const level = Game.getLevel();
  
  if (!level.enemies) return;

  // Update enemy positions
  level.enemies.forEach(enemy => {
    let moveAmount = (enemy.speed / 1000);

    if (enemy.type === 'patrol') {
      updatePatrolEnemy(enemy, moveAmount);
    } else if (enemy.type === 'chaser') {
      updateChaserEnemy(enemy, moveAmount);
    } else if (enemy.type === 'charger') {
      updateChargerEnemy(enemy);
    } else if (enemy.type === 'bouncer') {
      updateBouncerEnemy(enemy);
    } else if (enemy.type === 'orbiter') {
      updateOrbiterEnemy(enemy);
    }
  });
}

function drawEnemies() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  level.enemies.forEach(enemy => {
    let centerX = enemy.x * level.cellSize + level.cellSize / 2;
    let centerY = enemy.y * level.cellSize + level.cellSize / 2;

    noStroke();
    if (enemy.type === 'patrol') {
      drawPatrol(enemy, centerX, centerY);
    } else if (enemy.type === 'chaser') {
      drawChaser(enemy, centerX, centerY);
    } else if (enemy.type === 'charger') {
      drawCharger(enemy, centerX, centerY);
    } else if (enemy.type === 'bouncer') {
      drawBouncer(enemy, centerX, centerY);
    } else if (enemy.type === 'orbiter') {
      drawOrbiter(enemy, centerX, centerY);
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