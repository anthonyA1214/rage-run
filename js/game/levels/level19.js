const level19 = {
  cols: 18,
  rows: 15,
  cellSize: 40,
  
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 16, y: 13 },

  orbs: [
    { x: 9, y: 2 },
    { x: 3, y: 7 },
    { x: 14, y: 7 },
    { x: 9, y: 12 },
    { x: 6, y: 7 },
    { x: 12, y: 7 }
  ],

  enemies: [
    // Three orbiter systems creating zones (faster speeds)
    {
      type: 'orbiter',
      start: { x: 5, y: 4 },
      x: 5,
      y: 4,
      centerX: 5,
      centerY: 4,
      radius: 2,
      orbitSpeed: 6,
      startAngle: 0
    },
    {
      type: 'orbiter',
      start: { x: 5, y: 4 },
      x: 5,
      y: 4,
      centerX: 5,
      centerY: 4,
      radius: 2,
      orbitSpeed: -5,
      startAngle: 120
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 4 },
      x: 12,
      y: 4,
      centerX: 12,
      centerY: 4,
      radius: 2,
      orbitSpeed: 5,
      startAngle: 60
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 4 },
      x: 12,
      y: 4,
      centerX: 12,
      centerY: 4,
      radius: 2,
      orbitSpeed: -6,
      startAngle: 240
    },
    {
      type: 'orbiter',
      start: { x: 9, y: 10 },
      x: 9,
      y: 10,
      centerX: 9,
      centerY: 10,
      radius: 2.5,
      orbitSpeed: 4,
      startAngle: 180
    },
    
    // Additional orbiter at center
    {
      type: 'orbiter',
      start: { x: 9, y: 7 },
      x: 9,
      y: 7,
      centerX: 9,
      centerY: 7,
      radius: 1.8,
      orbitSpeed: 7,
      startAngle: 90
    },
    
    // Three chasers instead of two (faster)
    {
      type: 'chaser',
      start: { x: 1, y: 13 },
      x: 1,
      y: 13,
      speed: 29
    },
    {
      type: 'chaser',
      start: { x: 16, y: 1 },
      x: 16,
      y: 1,
      speed: 28
    },
    {
      type: 'chaser',
      start: { x: 8, y: 1 },
      x: 8,
      y: 1,
      speed: 27
    },
    
    // Vertical patrols (opposite directions, faster)
    {
      type: 'patrol',
      x: 9,
      y: 1,
      direction: { x: 0, y: 1 },
      start: { x: 9, y: 1 },
      end: { x: 9, y: 6 },
      speed: 90
    },
    {
      type: 'patrol',
      x: 9,
      y: 13,
      direction: { x: 0, y: -1 },
      start: { x: 9, y: 9 },
      end: { x: 9, y: 13 },
      speed: 90
    },
    
    // Additional horizontal patrol
    {
      type: 'patrol',
      x: 1,
      y: 7,
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 7 },
      end: { x: 7, y: 7 },
      speed: 42.5
    },

    {
      type: 'patrol',
      x: 16,
      y: 7,
      direction: { x: -1, y: 0 },
      start: { x: 16, y: 7 },
      end: { x: 10, y: 7 },
      speed: 42.5
    },
    
    // Charger for extra chaos
    {
      type: 'charger',
      start: { x: 9, y: 13 },
      x: 9,
      y: 13,
      speed: 155,
      teleportInterval: 2600,
      aimDuration: 700
    }
  ]
};