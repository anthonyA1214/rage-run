let player;
let playerMoving = false;
let movementProgress = 0;
let movementSpeed = 0.25; // Adjust this value to make movement faster or slower
let targetX, targetY;

function initPlayer() {
  const start = Game.getLevel().playerStart;
  player = { x: start.x, y: start.y };
  targetX = player.x;
  targetY = player.y;
}

function updatePlayer() {
  if (playerMoving) {
    movementProgress += movementSpeed;
    
    if (movementProgress >= 1) {
      player.x = targetX;
      player.y = targetY;
      playerMoving = false;
      movementProgress = 0;

      checkOrbCollection();
      checkExit();
      checkEnemyCollision();
    }
  }
}

function drawPlayer() {
  fill('#00BEDA');
  
  let level = Game.getLevel();

  let currentX = player.x;
  let currentY = player.y;
  
  if (playerMoving) {
    let t = easeInOutQuad(movementProgress);
    currentX = player.x + (targetX - player.x) * t;
    currentY = player.y + (targetY - player.y) * t;
  }

  // Draw circle in center of cell
  let centerX = currentX * level.cellSize + level.cellSize / 2;
  let centerY = currentY * level.cellSize + level.cellSize / 2;
  let size = level.cellSize * 0.55; // 55% of cell size
  let radius = size * 0.3;

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#00BEDA';
  
  rect(centerX - size / 2, centerY - size / 2, size, size, radius);

  drawingContext.shadowBlur = 0;
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function playerMovement() {
  if (playerMoving) return;

  let newX = player.x;
  let newY = player.y;
  
  // WASD movement and arrow keys
  if (key === 'w' || key === 'W' || keyCode === UP_ARROW) {
    newY -= 1;
  } else if (key === 's' || key === 'S' || keyCode === DOWN_ARROW) {
    newY += 1;
  } else if (key === 'a' || key === 'A' || keyCode === LEFT_ARROW) {
    newX -= 1;
  } else if (key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) {
    newX += 1;
  }
  
  // Check collision before moving
  if (!isWall(newX, newY)) {
    targetX = newX;
    targetY = newY;

    playerMoving = true;
    movementProgress = 0;
  }
}

function isWall(x, y) {
  let level = Game.getLevel();
  let index = y * Game.getCols() + x;
  
  // Check bounds
  if (x < 0 || x >= Game.getCols() || y < 0 || y >= Game.getRows()) {
    return true;
  }
  
  // Check if there's a wall at this position
  return level.arena[index] === 1;
}