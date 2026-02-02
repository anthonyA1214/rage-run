let player;

function initPlayer() {
  const start = Game.getLevel().playerStart;
  player = { x: start.x, y: start.y };
}

function drawPlayer() {
  fill('#00BEDA');
  
  // Draw circle in center of cell
  let centerX = player.x * Game.cellSize + Game.cellSize / 2;
  let centerY = player.y * Game.cellSize + Game.cellSize / 2;
  let size = Game.cellSize * 0.55; // 55% of cell size
  let radius = size * 0.3;

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#00BEDA';
  
  rect(centerX - size / 2, centerY - size / 2, size, size, radius);

  drawingContext.shadowBlur = 0;
}

function keyPressed() {
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
    player.x = newX;
    player.y = newY;

    checkOrbCollection();
    checkExit();
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

function checkOrbCollection() {
  let level = Game.getLevel();
  
  level.orbs.forEach(orb => {
    if (!orb.collected && orb.x === player.x && orb.y === player.y) {
      orbCollectedSound.setVolume(0.1);
      orbCollectedSound.play();
      orb.collected = true;
      Game.orbsCollected++;
      updateOrbsCollected();
    }
  });
}

function checkExit() {
  let level = Game.getLevel();
  let exit = level.exit;

  if (player.x === exit.x && player.y === exit.y && Game.allOrbsCollected()) {
    Game.nextLevel();
    updateLevel();
  }
}