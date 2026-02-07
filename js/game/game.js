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
    this.orbsCollected = 0;

    const start = this.getLevel().playerStart;
    player.x = start.x;
    player.y = start.y;

    this.deathCount++;
    updateDeathCount();
    updateOrbsCollected();


    let level = this.getLevel();

    // reset orbs
    level.orbs.forEach(orb => orb.collected = false);

    // reset enemies
    level.enemies.forEach(enemy => {
      if (enemy.type === 'patrol') {
        enemy.x = enemy.start.x;
        enemy.y = enemy.start.y;
        enemy.lastMove = millis(); // Initialize with current time
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
        enemy.lastMove = millis();
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