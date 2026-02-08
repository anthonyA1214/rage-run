function updateChargerEnemy(enemy) {
  // idle -> aiming -> charging -> idle
  if (!enemy.state) enemy.state = 'idle';
  
  if (enemy.state === 'idle') {
    if (millis() - (enemy.lastTeleport || 0) > enemy.teleportInterval) {
      teleportChargerNearPlayer(enemy);
      enemy.lastTeleport = millis();

      enemy.state = 'cooldown';
      enemy.cooldownStart = millis();
    }
  } else if (enemy.state === 'cooldown') {
    enemy.targetX = player.x;
    enemy.targetY = player.y;

    let duration = enemy.cooldownDuration || 800;
  
    if (millis() - enemy.cooldownStart > duration) {
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

// drawwww!!!!!

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
  } else if (enemy.state === 'cooldown') {
    let t = (millis() - enemy.cooldownStart) * 0.008;
  
    let pulse = sin(t) * 0.4 + 0.6;
  
    fill(250, 134, 215, 180);
    glowStrength = 12 + pulse * 18;
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