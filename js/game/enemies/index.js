function updateEnemies() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  // Update enemy positions
  level.enemies.forEach((enemy) => {
    let moveAmount = enemy.speed / 1000;

    if (enemy.type === "patrol") {
      updatePatrolEnemy(enemy, moveAmount);
    } else if (enemy.type === "chaser") {
      updateChaserEnemy(enemy, moveAmount);
    } else if (enemy.type === "charger") {
      updateChargerEnemy(enemy);
    } else if (enemy.type === "bouncer") {
      updateBouncerEnemy(enemy);
    } else if (enemy.type === "orbiter") {
      updateOrbiterEnemy(enemy);
    }
  });
}

function drawEnemies() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  level.enemies.forEach((enemy) => {
    let centerX = enemy.x * level.cellSize + level.cellSize / 2;
    let centerY = enemy.y * level.cellSize + level.cellSize / 2;

    noStroke();
    if (enemy.type === "patrol") {
      drawPatrol(enemy, centerX, centerY);
    } else if (enemy.type === "chaser") {
      drawChaser(enemy, centerX, centerY);
    } else if (enemy.type === "charger") {
      drawCharger(enemy, centerX, centerY);
    } else if (enemy.type === "bouncer") {
      drawBouncer(enemy, centerX, centerY);
    } else if (enemy.type === "orbiter") {
      drawOrbiter(enemy, centerX, centerY);
    }
  });
}

function checkEnemyCollision() {
  const level = Game.getLevel();
  if (!level.enemies) return;

  const playerRadius = 0.275; // cellSize * 0.55 / 2

  const enemyRadius = {
    patrol: 0.375, // cellSize * 0.75 / 2
    chaser: 0.375, // cellSize * 0.75 / 2
    charger: 0.35, // cellSize * 0.7  / 2
    bouncer: 0.35, // cellSize * 0.7  / 2
    orbiter: 0.325, // cellSize * 0.65 / 2
  };

  for (const enemy of level.enemies) {
    const threshold = playerRadius + (enemyRadius[enemy.type] ?? 0.35);
    if (
      dist(player.x + 0.5, player.y + 0.5, enemy.x + 0.5, enemy.y + 0.5) <
      threshold
    ) {
      Game.resetLevel();
      break;
    }
  }
}
