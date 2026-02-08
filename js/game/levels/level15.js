const level15 = {
  cols: 28,
  rows: 16,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,
    1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,
    1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],
  playerStart: { x: 1, y: 1 },
  exit: { x: 26, y: 14 },
  orbs: [
    { x: 3, y: 1 },
    { x: 13, y: 3 },
    { x: 21, y: 5 },
    { x: 8, y: 9 },
    { x: 19, y: 11 },
    { x: 15, y: 13 }
  ],
  enemies: [
    // Patrols
    {
      type: 'patrol',
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 5 },
      end: { x: 7, y: 5 },
      x: 1,
      y: 5,
      speed: 70
    },
    {
      type: 'patrol',
      direction: { x: 0, y: 1 },
      start: { x: 9, y: 3 },
      end: { x: 9, y: 7 },
      x: 9,
      y: 3,
      speed: 50
    },
    {
      type: 'patrol',
      direction: { x: 0, y: 1 },
      start: { x: 17, y: 5 },
      end: { x: 17, y: 9 },
      x: 17,
      y: 5,
      speed: 45
    },
    {
      type: 'patrol',
      direction: { x: -1, y: 0 },
      start: { x: 18, y: 7 },
      end: { x: 26, y: 7 },
      x: 26,
      y: 7,
      speed: 65
    },
    {
      type: 'patrol',
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 11 },
      end: { x: 12, y: 11 },
      x: 1,
      y: 11,
      speed: 75
    },
    {
      type: 'patrol',
      direction: { x: -1, y: 0 },
      start: { x: 14, y: 13 },
      end: { x: 26, y: 13 },
      x: 26,
      y: 13,
      speed: 68
    },
    // Chasers
    {
      type: 'chaser',
      start: { x: 21, y: 1 },
      x: 21,
      y: 1,
      speed: 22
    },
    {
      type: 'chaser',
      start: { x: 26, y: 9 },
      x: 26,
      y: 9,
      speed: 24
    },
    // Chargers - increased to 5
    {
      type: 'charger',
      start: { x: 7, y: 4 },
      x: 7,
      y: 4,
      speed: 135,
      cooldownDuration: 1200,
      teleportInterval: 3300,
      aimDuration: 950
    },
    {
      type: 'charger',
      start: { x: 14, y: 8 },
      x: 14,
      y: 8,
      speed: 130,
      cooldownDuration: 1350,
      teleportInterval: 3500,
      aimDuration: 1000
    },
    {
      type: 'charger',
      start: { x: 21, y: 10 },
      x: 21,
      y: 10,
      speed: 125,
      cooldownDuration: 1150,
      teleportInterval: 3800,
      aimDuration: 1100
    },
    {
      type: 'charger',
      start: { x: 11, y: 11 },
      x: 11,
      y: 11,
      speed: 128,
      cooldownDuration: 1250,
      teleportInterval: 3600,
      aimDuration: 1050
    },
    {
      type: 'charger',
      start: { x: 19, y: 3 },
      x: 19,
      y: 3,
      speed: 132,
      cooldownDuration: 1300,
      teleportInterval: 3400,
      aimDuration: 980
    }
  ]
};