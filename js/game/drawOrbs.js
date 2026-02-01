function drawOrbs() {
  let level = Game.getLevel();
  
  level.orbs.forEach(orb => {
    if (!orb.collected) {
      let pulse = sin(millis() * 0.003) * 0.5 + 0.5;
      let alpha = 115 + pulse * 105;

      fill(255, 215, 0, alpha);

      let centerX = orb.x * Game.cellSize + Game.cellSize / 2;
      let centerY = orb.y * Game.cellSize + Game.cellSize / 2;
      let diameter = Game.cellSize * 0.35;
      
      circle(centerX, centerY, diameter);
    }
  });
}