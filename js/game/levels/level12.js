const level12 = {
  cols: 18,
  rows: 12,
  cellSize: 40,
  
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 16, y: 10 },

  orbs: [
    { x: 5, y: 2 },
    { x: 13, y: 4 },
    { x: 8, y: 8 },
    { x: 14, y: 10 },
  ],

  enemies: [
    {
      type: 'charger',
      start: { x: 9, y: 6 },
      x: 9,
      y: 6,
      speed: 150,
      cooldownDuration: 950,
      teleportInterval: 2800,
      aimDuration: 750
    },
    {
      type: 'charger',
      start: { x: 5, y: 5 },
      x: 5,
      y: 5,
      speed: 145,
      cooldownDuration: 1150,
      teleportInterval: 3000,
      aimDuration: 800
    },
    {
      type: 'chaser',
      start: { x: 16, y: 1 },
      x: 16,
      y: 1,
      speed: 26,
    },
    {
      type: 'chaser',
      start: { x: 1, y: 10 },
      x: 1,
      y: 10,
      speed: 24,
    },
    {
      type: 'patrol',
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 5 },
      end: { x: 4, y: 5 },
      x: 1,
      y: 5,
      speed: 42,
    },
    {
      type: 'patrol',
      direction: { x: 1, y: 0 },
      start: { x: 7, y: 5 },
      end: { x: 10, y: 5 },
      x: 7,
      y: 5,
      speed: 100,
    },
    {
      type: 'patrol',
      direction: { x: -1, y: 0 },
      start: { x: 16, y: 5 },
      end: { x: 13, y: 5 },
      x: 16,
      y: 5,
      speed: 42,
    },
  ],
};