const levels = [
  {
    // level 1
    cols: 15,
    rows: 15,
    arena: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    playerStart: { x: 13, y: 13 },
    exit: { x: 13, y: 13 },
    orbs: [
      { x: 1, y: 1 },
      { x: 1, y: 13 },
      { x: 13, y: 1 }
    ]
  },
  {
    // level 2
    cols: 15,
    rows: 15,
    arena: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,
      1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,
      1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    playerStart: { x: 1, y: 1 },
    exit: { x: 13, y: 13 },
    orbs: [
      { x: 1, y: 13 },
      { x: 13, y: 1 },
      { x: 7, y: 7 },
      { x: 3, y: 3 }
    ]
  }
  // level 2 data...
];

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
    level.orbs.forEach(orb => orb.collected = false);
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
      console.log('you won!!!')
    }
  }
};