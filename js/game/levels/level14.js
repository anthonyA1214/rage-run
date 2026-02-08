const level14 = {
  cols: 20,
  rows: 13,

  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 18, y: 11 },

  orbs: [
    { x: 5, y: 2 },
    { x: 10, y: 4 },
    { x: 15, y: 6 },
    { x: 8, y: 9 },
    { x: 14, y: 10 },
  ],

  enemies: [
    {
      type: 'charger',
      start: { x: 5, y: 6 },
      x: 5,
      y: 6,
      speed: 160,
      cooldownDuration: 900,
      teleportInterval: 2500,
      aimDuration: 650
    },
    {
      type: 'charger',
      start: { x: 10, y: 6 },
      x: 10,
      y: 6,
      speed: 155,
      cooldownDuration: 1000,
      teleportInterval: 2700,
      aimDuration: 700
    },
    {
      type: 'charger',
      start: { x: 15, y: 6 },
      x: 15,
      y: 6,
      speed: 150,
      cooldownDuration: 1100,
      teleportInterval: 2900,
      aimDuration: 750
    },
    {
      type: 'charger',
      start: { x: 10, y: 3 },
      x: 10,
      y: 3,
      speed: 145,
      cooldownDuration: 1200,
      teleportInterval: 3100,
      aimDuration: 800
    },
    {
      type: 'chaser',
      start: { x: 18, y: 1 },
      x: 18,
      y: 1,
      speed: 30,
    },
    {
      type: 'chaser',
      start: { x: 1, y: 11 },
      x: 1,
      y: 11,
      speed: 28,
    },
    {
      type: 'chaser',
      start: { x: 10, y: 11 },
      x: 10,
      y: 11,
      speed: 26,
    },
    {
      type: 'patrol',
      direction: { x: -1, y: 0 },
      start: { x: 18, y: 6 },
      end: { x: 1, y: 6 },
      x: 18,
      y: 6,
      speed: 48,
    },
    {
      type: 'patrol',
      direction: { x: 1, y: 0 },
      start: { x: 3, y: 3 },
      end: { x: 16, y: 3 },
      x: 3,
      y: 3,
      speed: 45,
    },
    {
      type: 'patrol',
      direction: { x: -1, y: 0 },
      start: { x: 16, y: 9 },
      end: { x: 3, y: 9 },
      x: 16,
      y: 9,
      speed: 42,
    },
  ],
};