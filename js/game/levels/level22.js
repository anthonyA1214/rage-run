const level22 = {
  cols: 22,
  rows: 20,
  cellSize: 32,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,
    1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,
    1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,
    1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,
    1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,
    1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,
    1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,
    1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,
    1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,
    1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,
    1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,
    1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },
  exit: { x: 20, y: 18 },

  orbs: [
    { x: 2, y: 1 },
    { x: 10, y: 3 },
    { x: 4, y: 9 },
    { x: 14, y: 8 },
    { x: 17, y: 10 },
    { x: 11, y: 16 },
  ],

  enemies: [
    // Existing bouncers
    {
      type: 'bouncer',
      start: { x: 7, y: 5 },
      x: 7,
      y: 5,
      speed: 90,
      startDirection: { x: 0.7, y: 0.7 },
      direction: { x: 0.7, y: 0.7 }
    },
    {
      type: 'bouncer',
      start: { x: 15, y: 14 },
      x: 15,
      y: 14,
      speed: 95,
      startDirection: { x: -1, y: 0 },
      direction: { x: -1, y: 0 }
    },
  
    // New bouncers
    {
      type: 'bouncer',
      start: { x: 12, y: 3 },
      x: 12,
      y: 3,
      speed: 88,
      startDirection: { x: -0.6, y: 0.8 },
      direction: { x: -0.6, y: 0.8 }
    },
    {
      type: 'bouncer',
      start: { x: 17, y: 9 },
      x: 17,
      y: 9,
      speed: 92,
      startDirection: { x: 0.8, y: -0.6 },
      direction: { x: 0.8, y: -0.6 }
    },
    {
      type: 'bouncer',
      start: { x: 6, y: 16 },
      x: 6,
      y: 16,
      speed: 85,
      startDirection: { x: 0.7, y: -0.7 },
      direction: { x: 0.7, y: -0.7 }
    },
  
    // Patrols
    {
      type: 'patrol',
      x: 5,
      y: 3,
      direction: { x: 1, y: 0 },
      start: { x: 5, y: 3 },
      end: { x: 16, y: 3 },
      speed: 70
    },
    {
      type: 'patrol',
      x: 17,
      y: 8,
      direction: { x: 0, y: 1 },
      start: { x: 17, y: 8 },
      end: { x: 17, y: 14 },
      speed: 75
    },
  
    // Chasers
    {
      type: 'chaser',
      start: { x: 10, y: 10 },
      x: 10,
      y: 10,
      speed: 28
    },
    {
      type: 'chaser',
      start: { x: 5, y: 15 },
      x: 5,
      y: 15,
      speed: 32
    },
  
    // Charger
    {
      type: 'charger',
      start: { x: 11, y: 6 },
      x: 11,
      y: 6,
      speed: 145,
      teleportInterval: 3500,
      aimDuration: 900
    },
  
    {
      type: 'orbiter',
      start: { x: 6, y: 8 },
      x: 6,
      y: 8,
      centerX: 6,
      centerY: 8,
      radius: 3,
      orbitSpeed: -3,   // negative = counter-clockwise
      startAngle: 180
    },
  ]
};