const level16 = {
  cols: 15,
  rows: 14,
  cellSize: 40,
  
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,
    1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,
    1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 13, y: 12 },

  orbs: [
    { x: 7, y: 2 },
    { x: 2, y: 7 },
    { x: 12, y: 7 },
    { x: 7, y: 11 }
  ],

  enemies: [
    // Two orbiters at center - different speeds
    {
      type: 'orbiter',
      start: { x: 4, y: 7 },
      x: 4,
      y: 7,
      centerX: 4,
      centerY: 7,
      radius: 2.5,
      orbitSpeed: 5,
      startAngle: 0
    },
    {
      type: 'orbiter',
      start: { x: 10, y: 7 },
      x: 10,
      y: 7,
      centerX: 10,
      centerY: 7,
      radius: 2.5,
      orbitSpeed: -5,
      startAngle: 180
    },
    
    // Two patrols - horizontal corridors (opposite directions)
    {
      type: 'patrol',
      x: 1,
      y: 5,
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 5 },
      end: { x: 13, y: 5 },
      speed: 90
    },
    {
      type: 'patrol',
      x: 13,
      y: 8,
      direction: { x: -1, y: 0 },
      start: { x: 13, y: 8 },
      end: { x: 1, y: 8 },
      speed: 90
    },
    
    // Chaser for added pressure
    {
      type: 'chaser',
      start: { x: 13, y: 1 },
      x: 13,
      y: 1,
      speed: 26
    }
  ]
};