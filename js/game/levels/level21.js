const level21 = {
  cols: 24,
  rows: 18,
  cellSize: 35,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],
  playerStart: { x: 1, y: 1 },
  exit: { x: 22, y: 16 },
  orbs: [
    { x: 2, y: 2 },        // Top left - safe start area
    { x: 21, y: 2 },       // Top right
    { x: 12, y: 1 },       // Top center
    { x: 6, y: 8 },        // Left middle
    { x: 17, y: 9 },       // Right middle
    { x: 2, y: 15 },       // Bottom left
    { x: 21, y: 15 },      // Bottom right
    { x: 12, y: 16 },      // Bottom center
  ],
  enemies: [
    // Introduction bouncer - slow and predictable in top area
    {
      type: 'bouncer',
      start: { x: 8, y: 4 },
      x: 8,
      y: 4,
      speed: 60,
      startDirection: { x: 1, y: 0 },
      direction: { x: 1, y: 0 }
    },
    // Diagonal bouncer - medium speed center-left
    {
      type: 'bouncer',
      start: { x: 5, y: 8 },
      x: 5,
      y: 8,
      speed: 80,
      startDirection: { x: 0.707, y: 0.707 },
      direction: { x: 0.707, y: 0.707 }
    },
    // Fast horizontal bouncer - top right
    {
      type: 'bouncer',
      start: { x: 18, y: 4 },
      x: 18,
      y: 4,
      speed: 100,
      startDirection: { x: -1, y: 0 },
      direction: { x: -1, y: 0 }
    },
    // Vertical bouncer - center
    {
      type: 'bouncer',
      start: { x: 12, y: 8 },
      x: 12,
      y: 8,
      speed: 75,
      startDirection: { x: 0, y: 1 },
      direction: { x: 0, y: 1 }
    },
    // Diagonal bouncer - bottom right area
    {
      type: 'bouncer',
      start: { x: 19, y: 13 },
      x: 19,
      y: 13,
      speed: 85,
      startDirection: { x: -0.707, y: -0.707 },
      direction: { x: -0.707, y: -0.707 }
    },
    // Slow bouncer - bottom left
    {
      type: 'bouncer',
      start: { x: 5, y: 13 },
      x: 5,
      y: 13,
      speed: 65,
      startDirection: { x: 0.707, y: -0.707 },
      direction: { x: 0.707, y: -0.707 }
    },
    // Fast diagonal - center right
    {
      type: 'bouncer',
      start: { x: 16, y: 9 },
      x: 16,
      y: 9,
      speed: 95,
      startDirection: { x: -0.707, y: 0.707 },
      direction: { x: -0.707, y: 0.707 }
    }
  ]
};