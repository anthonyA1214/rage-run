function updateEnemies() {
  const level = Game.getLevel();
  
  if (!level.enemies) return;

  // Update enemy positions
  level.enemies.forEach(enemy => {
    let moveAmount = (enemy.speed / 1000);

    if (enemy.type === 'patrol') {

      enemy.x += enemy.direction.x * moveAmount;
      enemy.y += enemy.direction.y * moveAmount;
  
      if (enemy.x < Math.min(enemy.start.x, enemy.end.x) ||
          enemy.x > Math.max(enemy.start.x, enemy.end.x) ||
          enemy.y < Math.min(enemy.start.y, enemy.end.y) ||
          enemy.y > Math.max(enemy.start.y, enemy.end.y)) {
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
    } else if (enemy.type === 'charger') {
      updateChargerEnemy(enemy);
    }
  });

}

function updateChargerEnemy(enemy) {
  // idle -> aiming -> charging -> idle
  if (!enemy.state) enemy.state = 'idle';
  
  if (enemy.state === 'idle') {
    if (millis() - (enemy.lastTeleport || 0) > enemy.teleportInterval) {
      teleportChargerNearPlayer(enemy);
      enemy.lastTeleport = millis();
      enemy.state = 'aiming';
      enemy.aimStart = millis();
      enemy.targetX = player.x;
      enemy.targetY = player.y;
    }
  } else if (enemy.state === 'aiming') {
    if (millis() - enemy.aimStart > enemy.aimDuration) {
      enemy.state = 'charging';
      let dx = enemy.targetX - enemy.x;
      let dy = enemy.targetY - enemy.y;
      let distance = sqrt(dx * dx + dy * dy);
      if (distance > 0) {
        enemy.chargeDirection = { x: dx / distance, y: dy / distance };
      } else {
        enemy.chargeDirection = { x: 0, y: 0 };
      }
    }
  } else if (enemy.state === 'charging') {
    enemy.x += enemy.chargeDirection.x * (enemy.speed / 1000);
    enemy.y += enemy.chargeDirection.y * (enemy.speed / 1000);
    
    // After charging for a short time, go back to idle
    if (millis() - enemy.aimStart > enemy.aimDuration + 1000) {
      enemy.state = 'idle';
      enemy.chargeDirection = null;
    }
  }
}

function teleportChargerNearPlayer(enemy) {
  // Try to teleport within 2-4 cells of player
  let attempts = 0;
  let teleported = false;
  
  while (attempts < 50 && !teleported) {
    // 5 tiles away in a random direction
    let distance = floor(random(3, 10));
    let angle = random(TWO_PI);
    
    let newX = round(player.x + cos(angle) * distance);
    let newY = round(player.y + sin(angle) * distance);
    
    // Make sure position is valid (walls are okay, just check bounds and not on player)
    if (newX >= 0 && newX < Game.getCols() && 
        newY >= 0 && newY < Game.getRows() &&
        (newX !== player.x || newY !== player.y)) {
      enemy.x = newX;
      enemy.y = newY;
      teleported = true;
    }
    
    attempts++;
  }
  
  // If couldn't teleport, just stay where you are
}

function drawEnemies() {
  const level = Game.getLevel();

  if (!level.enemies) return;

  level.enemies.forEach(enemy => {
    let centerX = enemy.x * Game.cellSize + Game.cellSize / 2;
    let centerY = enemy.y * Game.cellSize + Game.cellSize / 2;

    if (enemy.type === 'patrol') {
      drawPatrol(enemy, centerX, centerY);
    } else if (enemy.type === 'chaser') {
      drawChaser(enemy, centerX, centerY);
    } else if (enemy.type === 'charger') {
      drawCharger(enemy, centerX, centerY);
    }
    
  }) 
}

function drawPatrol(enemy, centerX, centerY) {
  fill('#EF4444');

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#EF4444';

  ellipse(centerX, centerY, Game.cellSize * 0.75);

  drawingContext.shadowBlur = 0;
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

function drawCharger(enemy, centerX, centerY) {
  let size = Game.cellSize * 0.7;

  let angle = 0;
  if (enemy.targetX !== undefined) {
    let tx = enemy.targetX * Game.cellSize + Game.cellSize / 2;
    let ty = enemy.targetY * Game.cellSize + Game.cellSize / 2;
    angle = atan2(ty - centerY, tx - centerX) + HALF_PI;
  }

  let glowColor = 'rgba(250,134,215,1)';
  let glowStrength = 20;

  if (enemy.state === 'idle') {
    // Semi-transparent when idle
    fill(250, 134, 215, 150);
    glowStrength = 10;
  } else if (enemy.state === 'aiming') {
    // Pulsing cyan when aiming
    let pulse = sin(millis() * 0.01) * 0.3 + 0.7;
    fill(250, 134, 215, pulse * 255);
    glowStrength = pulse * 25;
    
    // Draw aiming line to target
    stroke(250, 134, 215, 200);
    strokeWeight(2);
    line(
      centerX, 
      centerY,
      enemy.targetX * Game.cellSize + Game.cellSize / 2,
      enemy.targetY * Game.cellSize + Game.cellSize / 2
    );
  } else if (enemy.state === 'charging') {
    // Bright cyan when charging
    fill(250, 134, 215);
    glowStrength = 30;
  }

  drawingContext.shadowBlur = glowStrength;
  drawingContext.shadowColor = glowColor;

  drawKite(centerX, centerY, size, angle);

  drawingContext.shadowBlur = 0;
}

function drawKite(cx, cy, size, angle = 0) {
  push();
  translate(cx, cy);
  rotate(angle);

  beginShape();
  vertex(0, -size * 0.6);   // top (longer = kite feel)
  vertex(size * 0.4, 0);    // right
  vertex(0, size * 0.6);    // bottom
  vertex(-size * 0.4, 0);   // left
  endShape(CLOSE);

  pop();
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