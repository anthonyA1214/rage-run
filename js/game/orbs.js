function drawOrbs() {
  let level = Game.getLevel();
  
  level.orbs.forEach(orb => {
    if (!orb.collected) {
      let pulse = sin(millis() * 0.003) * 0.5 + 0.5;
      let alpha = 115 + pulse * 105;

      fill(255, 215, 0, alpha);

      let centerX = orb.x * level.cellSize + level.cellSize / 2;
      let centerY = orb.y * level.cellSize + level.cellSize / 2;
      let diameter = level.cellSize * 0.35;
      
      circle(centerX, centerY, diameter);
    }
  });
}

function checkOrbCollection() {
  let level = Game.getLevel();
  
  level.orbs.forEach(orb => {
    if (!orb.collected && orb.x === player.x && orb.y === player.y) {
      orbCollectedSound.setVolume(1);
      orbCollectedSound.play();
      orb.collected = true;
      Game.orbsCollected++;
      updateOrbsCollected();
    }
  });
}