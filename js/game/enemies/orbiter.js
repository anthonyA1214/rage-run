function updateOrbiterEnemy(enemy) {
  // Initialize if needed
  if (enemy.angle === undefined) {
    enemy.angle = 0;
  }
  
  // Get orbit settings
  let orbitSpeed = enemy.orbitSpeed || 1.5; // Degrees per frame
  let radius = enemy.radius || 3; // Distance from center in cells
  let centerX = enemy.centerX || enemy.start.x;
  let centerY = enemy.centerY || enemy.start.y;
  
  // Update angle
  enemy.angle += orbitSpeed;
  if (enemy.angle >= 360) {
    enemy.angle -= 360;
  }
  
  // Calculate position based on angle
  let angleRad = radians(enemy.angle);
  enemy.x = centerX + cos(angleRad) * radius;
  enemy.y = centerY + sin(angleRad) * radius;
  
  // Store center for drawing
  enemy.centerX = centerX;
  enemy.centerY = centerY;
  enemy.currentRadius = radius;
}

function drawOrbiter(enemy, centerX, centerY) {
  let size = Game.cellSize * 0.65;
  
  // Draw orbit path (faint circle showing the orbit)
  noFill();
  stroke(255, 165, 0, 80); // Orange, semi-transparent
  strokeWeight(1);
  let orbitCenterX = enemy.centerX * Game.cellSize + Game.cellSize / 2;
  let orbitCenterY = enemy.centerY * Game.cellSize + Game.cellSize / 2;
  let orbitRadius = enemy.currentRadius * Game.cellSize;
  circle(orbitCenterX, orbitCenterY, orbitRadius * 2);
  noStroke();
  
  // Draw the enemy
  fill(255, 165, 0); // Orange
  
  // Glow effect
  let pulse = sin(millis() * 0.008) * 0.2 + 0.8;
  drawingContext.shadowBlur = pulse * 22;
  drawingContext.shadowColor = 'rgba(255, 165, 0, 0.8)';
  
  // Draw as a hexagon
  push();
  translate(centerX, centerY);
  
  // Rotate to face direction of movement
  let angle = atan2(enemy.y - enemy.centerY, enemy.x - enemy.centerX);
  rotate(angle);
  
  beginShape();
  for (let i = 0; i < 6; i++) {
    let a = (TWO_PI / 6) * i;
    let r = size / 2;
    vertex(cos(a) * r, sin(a) * r);
  }
  endShape(CLOSE);
  
  // Inner bright core
  fill(255, 200, 100);
  circle(0, 0, size * 0.3);
  
  pop();
  
  drawingContext.shadowBlur = 0;
  
  // Draw trail effect
  if (!enemy.trail) {
    enemy.trail = [];
  }
  
  // Add current position to trail
  enemy.trail.push({ x: centerX, y: centerY, time: millis() });
  
  // Remove old trail positions (keep last 10)
  if (enemy.trail.length > 10) {
    enemy.trail.shift();
  }
  
  // Draw trail
  for (let i = 0; i < enemy.trail.length - 1; i++) {
    let trailAge = millis() - enemy.trail[i].time;
    let trailOpacity = 150 * (1 - trailAge / 1000);
    let trailSize = (size * 0.4) * (i / enemy.trail.length);
    
    if (trailOpacity > 0) {
      fill(255, 165, 0, trailOpacity);
      circle(enemy.trail[i].x, enemy.trail[i].y, trailSize);
    }
  }
}