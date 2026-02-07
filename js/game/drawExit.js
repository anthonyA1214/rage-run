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
  rect(exit.x * Game.cellSize, exit.y * Game.cellSize, Game.cellSize, Game.cellSize);
  
  // Draw inner square with pulsing glow
  let padding = Game.cellSize * 0.2;

  if (unlocked) {
    fill('#96FF96');

    // Pulsing glow between 20 → 50
    let glow = 35 + sin(millis() / 300) * 15; 
    // Explanation: 35 ± 15 → 20 → 50
    drawingContext.shadowBlur = glow;
    drawingContext.shadowColor = '#96FF96';

    rect(
      exit.x * Game.cellSize + padding,
      exit.y * Game.cellSize + padding,
      Game.cellSize - padding * 2,
      Game.cellSize - padding * 2
    );
  } else {
    fill(120);
    rect(
      exit.x * Game.cellSize + padding,
      exit.y * Game.cellSize + padding,
      Game.cellSize - padding * 2,
      Game.cellSize - padding * 2
    );
  }

  drawingContext.shadowBlur = 0; // reset
}
