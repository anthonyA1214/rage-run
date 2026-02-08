function updateBouncerEnemy(enemy) {
  let moveAmount = (enemy.speed / 1000);
  
  // Calculate next position
  let newX = enemy.x + enemy.direction.x * moveAmount;
  let newY = enemy.y + enemy.direction.y * moveAmount;
  
  // Check collision with walls
  let hitWall = false;
  
  // Check X direction
  if (isWall(Math.round(newX), Math.round(enemy.y))) {
    hitWall = true;
  }
  
  // Check Y direction
  if (isWall(Math.round(enemy.x), Math.round(newY))) {
    hitWall = true;
  }
  
  // Check diagonal (both X and Y)
  if (isWall(Math.round(newX), Math.round(newY))) {
    hitWall = true;
  }
  
  if (hitWall) {
    // Bounce in a random new direction
    let angle = random(TWO_PI);
    enemy.direction.x = cos(angle);
    enemy.direction.y = sin(angle);
    
    // Flash brighter when bouncing
    enemy.lastBounce = millis();
  } else {
    // Continue moving
    enemy.x = newX;
    enemy.y = newY;
  }
}

function drawBouncer(enemy, centerX, centerY) {
  let level = Game.getLevel();
  let size = level.cellSize * 0.7;
  
  // Color shifts based on movement direction
  let hue = (atan2(enemy.direction.y, enemy.direction.x) + PI) / TWO_PI;
  
  // Flash brighter when just bounced
  let timeSinceBounce = millis() - (enemy.lastBounce || 0);
  let brightness = timeSinceBounce < 200 ? 255 : 180;
  
  // Create a colorful gradient effect
  colorMode(HSB);
  fill(hue * 360, 80, brightness);
  
  let glowStrength = timeSinceBounce < 200 ? 25 : 15;
  drawingContext.shadowBlur = glowStrength;
  drawingContext.shadowColor = `hsl(${hue * 360}, 80%, 50%)`;
  
  // Draw as an octagon to distinguish from other enemies
  push();
  translate(centerX, centerY);
  
  // Rotate based on movement
  let rotation = atan2(enemy.direction.y, enemy.direction.x);
  rotate(rotation);
  
  beginShape();
  for (let i = 0; i < 8; i++) {
    let angle = (TWO_PI / 8) * i;
    let r = size / 2;
    vertex(cos(angle) * r, sin(angle) * r);
  }
  endShape(CLOSE);
  
  pop();
  
  drawingContext.shadowBlur = 0;
  colorMode(RGB);
}

// function updateBouncerEnemy(enemy) {
//   let moveAmount = (enemy.speed / 1000);
//   let level = Game.getLevel();
//   let radiusCells = (level.cellSize * 0.7) / 2 / level.cellSize;
  
//   // Calculate next position
//   let newX = enemy.x + enemy.direction.x * moveAmount;
//   let newY = enemy.y + enemy.direction.y * moveAmount;
//   let centerX = newX + 0.5;
//   let centerY = newY + 0.5;
  
//   // Check collision with walls
//   let hitWall = false;
//   let isWallAtPoint = (x, y) => isWall(Math.floor(x), Math.floor(y));
//   let testPoints = [
//     [centerX - radiusCells, centerY],
//     [centerX + radiusCells, centerY],
//     [centerX, centerY - radiusCells],
//     [centerX, centerY + radiusCells],
//     [centerX - radiusCells, centerY - radiusCells],
//     [centerX + radiusCells, centerY - radiusCells],
//     [centerX - radiusCells, centerY + radiusCells],
//     [centerX + radiusCells, centerY + radiusCells]
//   ];
  
//   for (let i = 0; i < testPoints.length; i++) {
//     let point = testPoints[i];
//     if (isWallAtPoint(point[0], point[1])) {
//       hitWall = true;
//       break;
//     }
//   }
  
//   if (hitWall) {
//     // Bounce in a random new direction
//     let angle = random(TWO_PI);
//     enemy.direction.x = cos(angle);
//     enemy.direction.y = sin(angle);
    
//     // Flash brighter when bouncing
//     enemy.lastBounce = millis();
//   } else {
//     // Continue moving
//     enemy.x = newX;
//     enemy.y = newY;
//   }
// }