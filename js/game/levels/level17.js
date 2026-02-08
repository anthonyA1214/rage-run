const level17 = {
  cols: 17,
  rows: 13,
  cellSize: 40,
  
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 15, y: 11 },

  orbs: [
    { x: 8, y: 2 },
    { x: 3, y: 6 },
    { x: 13, y: 6 },
    { x: 8, y: 10 },
    { x: 5, y: 3 }
  ],

  enemies: [
    // Two orbiter pairs - left and right (slightly faster)
    {
      type: 'orbiter',
      start: { x: 5, y: 6 },
      x: 5,
      y: 6,
      centerX: 5,
      centerY: 6,
      radius: 2,
      orbitSpeed: 6,
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 5, y: 6 },
      x: 5,
      y: 6,
      centerX: 5,
      centerY: 6,
      radius: 2,
      orbitSpeed: -6,
      angle: 180
    },
    {
      type: 'orbiter',
      start: { x: 11, y: 6 },
      x: 11,
      y: 6,
      centerX: 11,
      centerY: 6,
      radius: 2,
      orbitSpeed: 5,
      angle: 90
    },
    {
      type: 'orbiter',
      start: { x: 11, y: 6 },
      x: 11,
      y: 6,
      centerX: 11,
      centerY: 6,
      radius: 2,
      orbitSpeed: -5,
      angle: 270
    },
    
    // Additional orbiter in center
    {
      type: 'orbiter',
      start: { x: 8, y: 6 },
      x: 8,
      y: 6,
      centerX: 8,
      centerY: 6,
      radius: 1.5,
      orbitSpeed: 7,
      angle: 45
    },
    
    // Charger with faster intervals
    {
      type: 'charger',
      start: { x: 8, y: 1 },
      x: 8,
      y: 1,
      speed: 150,
      teleportInterval: 2800,
      aimDuration: 750
    },
    
    // Two patrols instead of one
    {
      type: 'patrol',
      x: 15,
      y: 11,
      direction: { x: -1, y: 0 },
      start: { x: 1, y: 11 },
      end: { x: 15, y: 11 },
      speed: 100
    },
    {
      type: 'patrol',
      x: 1,
      y: 3,
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 3 },
      end: { x: 15, y: 3 },
      speed: 95
    },
    
    // Chaser for extra pressure
    {
      type: 'chaser',
      start: { x: 15, y: 1 },
      x: 15,
      y: 1,
      speed: 27
    }
  ]
};