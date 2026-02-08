function drawExit() {
  let level = Game.getLevel();
  let exit = level.exit;
  
  const unlocked = Game.allOrbsCollected();

  // Draw exit portal background
  if (unlocked) {
    fill(0, 255, 0); // Lime green
  } else {
    fill(80); // Gray
  }
  noStroke();
  rect(exit.x * level.cellSize, exit.y * level.cellSize, level.cellSize, level.cellSize);
  
  // Draw inner square with pulsing glow
  let padding = level.cellSize * 0.2;

  if (unlocked) {
    fill('#96FF96');

    // Pulsing glow between 20 → 50
    let glow = 35 + sin(millis() / 300) * 15; 
    // Explanation: 35 ± 15 → 20 → 50
    drawingContext.shadowBlur = glow;
    drawingContext.shadowColor = '#96FF96';

    noStroke();
    rect(
      exit.x * level.cellSize + padding,
      exit.y * level.cellSize + padding,
      level.cellSize - padding * 2,
      level.cellSize - padding * 2
    );
  } else {
    fill(120);
    noStroke();
    rect(
      exit.x * level.cellSize + padding,
      exit.y * level.cellSize + padding,
      level.cellSize - padding * 2,
      level.cellSize - padding * 2
    );
  }

  drawingContext.shadowBlur = 0; // reset
}

function checkExit() {
  let level = Game.getLevel();
  let exit = level.exit;

  if (player.x === exit.x && player.y === exit.y && Game.allOrbsCollected()) {
    Game.nextLevel();
    updateLevel();
  }
}