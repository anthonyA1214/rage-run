function drawExit() {
  let level = Game.getLevel();
  let exit = level.exit;
  
  // Draw exit portal - gray if locked, lime if unlocked
  if (Game.allOrbsCollected()) {
    fill(0, 255, 0); // Lime green - active!
  } else {
    fill(80); // Gray - locked
  }
  
  rect(exit.x * Game.cellSize, exit.y * Game.cellSize, Game.cellSize, Game.cellSize);
  
  // Draw a visual indicator (square within square)
  if (Game.allOrbsCollected()) {
    fill('#96FF96');
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = '#96FF96'
  } else {
    fill(120);
  }
  
  let padding = Game.cellSize * 0.2;
  rect(
    exit.x * Game.cellSize + padding,
    exit.y * Game.cellSize + padding,
    Game.cellSize - padding * 2,
    Game.cellSize - padding * 2
  );

  drawingContext.shadowBlur = 0;
}