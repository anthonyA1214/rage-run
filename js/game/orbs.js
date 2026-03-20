function drawOrbs() {
  let level = Game.getLevel();

  level.orbs.forEach((orb) => {
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
  const level = Game.getLevel();
  const playerRadius = 0.275; // cellSize * 0.55 / 2 / cellSize
  const orbRadius = 0.175; // cellSize * 0.35 / 2 / cellSize

  level.orbs.forEach((orb) => {
    if (orb.collected) return;
    if (
      dist(player.x + 0.5, player.y + 0.5, orb.x + 0.5, orb.y + 0.5) <
      playerRadius + orbRadius
    ) {
      orbCollectedSound.setVolume(1);
      orbCollectedSound.play();
      orb.collected = true;
      Game.orbsCollected++;
      updateOrbsCollected();
    }
  });
}
