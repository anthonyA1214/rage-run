const level18 = {
  cols: 19,
  rows: 17,
  cellSize: 40,
  
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 17, y: 15 },

  orbs: [
    { x: 2, y: 3 },      // Top left
    { x: 16, y: 3 },     // Top right
    { x: 2, y: 13 },     // Bottom left
    { x: 16, y: 13 },    // Bottom right
    { x: 9, y: 1 },      // Top center
  ],

  enemies: [
    // Central orbiter - reduced from 4 to 2
    {
      type: 'orbiter',
      start: { x: 9, y: 8 },
      x: 9,
      y: 8,
      centerX: 9,
      centerY: 8,
      radius: 3.5,
      orbitSpeed: 2.5,  // Slower
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 9, y: 8 },
      x: 9,
      y: 8,
      centerX: 9,
      centerY: 8,
      radius: 3.5,
      orbitSpeed: 2.5,  // Slower
      angle: 180
    },
    
    // Single corner orbiter (top-left area)
    {
      type: 'orbiter',
      start: { x: 4, y: 4 },
      x: 4,
      y: 4,
      centerX: 4,
      centerY: 4,
      radius: 2,
      orbitSpeed: 3.5,
      angle: 0
    },
    
    // Single corner orbiter (bottom-right area)
    {
      type: 'orbiter',
      start: { x: 14, y: 12 },
      x: 14,
      y: 12,
      centerX: 14,
      centerY: 12,
      radius: 2,
      orbitSpeed: -3.5,
      angle: 90
    },
    
    // Charger - slower and less frequent
    {
      type: 'charger',
      start: { x: 9, y: 15 },  // Moved to bottom to give player breathing room
      x: 9,
      y: 15,
      speed: 120,  // Slower
      teleportInterval: 4000,  // Less frequent
      aimDuration: 1000  // More warning time
    },
    
    // Single chaser - slower
    {
      type: 'chaser',
      start: { x: 17, y: 8 },
      x: 17,
      y: 8,
      speed: 20  // Slower
    },
    
    // Two patrols - reduced from 3
    {
      type: 'patrol',
      x: 2,
      y: 3,
      direction: { x: 1, y: 0 },
      start: { x: 2, y: 3 },
      end: { x: 16, y: 3 },
      speed: 70  // Slower
    },
    {
      type: 'patrol',
      x: 16,
      y: 14,
      direction: { x: -1, y: 0 },
      start: { x: 2, y: 14 },
      end: { x: 16, y: 14 },
      speed: 70  // Slower
    }
  ]
};