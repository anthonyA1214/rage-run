const Game = {
  currentLevel: 0,
  isGameStarted: false,
  deathCount: 0,
  orbsCollected: 0,
  isGameFinished: false,
  isGamePaused: false,

  getLevel() {
    return levels[this.currentLevel];
  },

  getTotalLevels() {
    return levels.length;
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

  togglePause() {
    this.isGamePaused = !this.isGamePaused;

    if (this.isGamePaused) {
      noLoop();
      showPauseOverlay();
    } else {
      loop();
      removePauseOverlay();
    }
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
    level.orbs.forEach((orb) => (orb.collected = false));

    // reset enemies
    level.enemies.forEach((enemy) => {
      if (enemy.type === "patrol") {
        resetPatrol(enemy);
      } else if (enemy.type === "chaser") {
        resetChaser(enemy);
      } else if (enemy.type === "charger") {
        resetCharger(enemy);
      } else if (enemy.type === "orbiter") {
        resetOrbiter(enemy);
      } else if (enemy.type === "bouncer") {
        resetBouncer(enemy);
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

      level.orbs.forEach((orb) => (orb.collected = false));
      level.enemies.forEach((enemy) => {
        if (enemy.type === "patrol") {
          resetPatrol(enemy);
        } else if (enemy.type === "chaser") {
          resetChaser(enemy);
        } else if (enemy.type === "charger") {
          resetCharger(enemy);
        } else if (enemy.type === "orbiter") {
          resetOrbiter(enemy);
        } else if (enemy.type === "bouncer") {
          resetBouncer(enemy);
        }
      });

      resizeCanvas(level.cols * level.cellSize, level.rows * level.cellSize);
    } else {
      Game.isGameFinished = true;
    }
  },
};

function resetPatrol(enemy) {
  enemy.x = enemy.start.x;
  enemy.y = enemy.start.y;
  if (enemy.start.x !== enemy.end.x) {
    enemy.direction = { x: 1, y: 0 };
  } else {
    enemy.direction = { x: 0, y: 1 };
  }
}

function resetChaser(enemy) {
  enemy.x = enemy.start.x;
  enemy.y = enemy.start.y;
}

function resetCharger(enemy) {
  enemy.x = enemy.start.x;
  enemy.y = enemy.start.y;
  enemy.state = "idle";
  enemy.chargeDirection = null;
  enemy.targetX = null;
  enemy.targetY = null;
  enemy.stateStartTime = millis();
}

function resetOrbiter(enemy) {
  enemy.angle = enemy.startAngle ?? 0;
}

function resetBouncer(enemy) {
  enemy.x = enemy.start.x;
  enemy.y = enemy.start.y;
  enemy.direction = { x: enemy.startDirection.x, y: enemy.startDirection.y };
}
