const Game = {
  cellSize: 40,
  currentLevel: 0,
  isGameStarted: false,
  deathCount: 0,
  orbsCollected: 0,
  isGameFinished: false,

  getLevel() {
    return levels[this.currentLevel];
  },
  
  getCols() {
    return this.getLevel().cols;
  },
  
  getRows() {
    return this.getLevel().rows;
  },

  getPlayer() {
    return this.getLevel().playerStart;
  },

  getTotalOrbs() {
    return this.getLevel().orbs.length;
  },

  allOrbsCollected() {
    return this.orbsCollected >= this.getTotalOrbs();
  },

  resetLevel() {
    let level = this.getLevel();
    this.orbsCollected = 0;

    player.x = level.playerStart.x;
    player.y = level.playerStart.y;
    targetX = player.x;
    targetY = player.y;
    playerMoving = false;
    movementProgress = 0;

    this.deathCount++;
    updateDeathCount();
    updateOrbsCollected();


    // reset orbs
    level.orbs.forEach(orb => orb.collected = false);

    // reset enemies
    level.enemies.forEach(enemy => {
      if (enemy.type === 'patrol') {
        enemy.x = enemy.start.x;
        enemy.y = enemy.start.y;
        // Set initial direction based on start/end points
        if (enemy.start.x !== enemy.end.x) {
          enemy.direction = { x: 1, y: 0 };
        } else {
          enemy.direction = { x: 0, y: 1 };
        }
      } else if (enemy.type === 'chaser') {
        // For chasers, we can reset their position to a predefined spot or keep them where they are
        // Here, we'll reset them to their initial position
        enemy.x = enemy.start.x;
        enemy.y = enemy.start.y;
      } else if (enemy.type === 'charger') {        
        enemy.x = enemy.start.x;
        enemy.y = enemy.start.y;
        enemy.state = 'idle';
        enemy.chargeDirection = null;
        enemy.targetX = null;
        enemy.targetY = null;
        enemy.stateStartTime = millis();
      }
    });
  },

  nextLevel() {
    if (this.currentLevel < levels.length - 1) {
      this.currentLevel++;
      this.orbsCollected = 0;
      const start = this.getLevel().playerStart;

      player.x = start.x;
      player.y = start.y;

      let level = this.getLevel();

      level.orbs.forEach(orb => orb.collected = false);

      resizeCanvas(level.cols * this.cellSize, level.rows * this.cellSize);
    } else {
      Game.isGameFinished = true;
    }
  }
};