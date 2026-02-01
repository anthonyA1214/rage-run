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
  // level 2 data...
];

const Game = {
  cellSize: 40,
  currentLevel: 0,
  isPaused: true,
  deathCount: 0,
  orbsCollected: 0,

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

  getDeathCount() {
    return this.deathCount
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
  }
};