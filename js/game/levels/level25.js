const level25 = {
  cols: 25,
  rows: 21,
  cellSize: 30,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },

  exit: { x: 23, y: 19 },

  orbs: [
    { x: 3, y: 2 },      // Top left corner - safe start area
    { x: 21, y: 2 },     // Top right corner
    { x: 3, y: 18 },     // Bottom left corner
    { x: 21, y: 18 },    // Bottom right corner
    { x: 12, y: 1 },     // Top center
    { x: 12, y: 19 },    // Bottom center
    { x: 1, y: 10 },     // Left middle
    { x: 23, y: 10 },    // Right middle - near exit
  ],

  enemies: [
    // === ORBITERS - OUTER RING (4 enemies) ===
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5.5,
      orbitSpeed: 3.0,
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5.5,
      orbitSpeed: 3.0,
      angle: 90
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5.5,
      orbitSpeed: 3.0,
      angle: 180
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5.5,
      orbitSpeed: 3.0,
      angle: 270
    },
    
    // === ORBITERS - MIDDLE RING (3 enemies, opposite direction) ===
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 3.5,
      orbitSpeed: -4.5,
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 3.5,
      orbitSpeed: -4.5,
      angle: 120
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 3.5,
      orbitSpeed: -4.5,
      angle: 240
    },
    
    // === ORBITERS - INNER RING (2 enemies, fast) ===
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 2,
      orbitSpeed: 5.5,
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 2,
      orbitSpeed: 5.5,
      angle: 180
    },
    
    // === QUADRANT ORBITERS (one per quadrant) ===
    
    // Top-left quadrant
    {
      type: 'orbiter',
      start: { x: 6, y: 5 },
      x: 6,
      y: 5,
      centerX: 6,
      centerY: 5,
      radius: 2.5,
      orbitSpeed: 3.8,
      angle: 0
    },
    
    // Top-right quadrant
    {
      type: 'orbiter',
      start: { x: 18, y: 5 },
      x: 18,
      y: 5,
      centerX: 18,
      centerY: 5,
      radius: 2.5,
      orbitSpeed: -3.8,
      angle: 90
    },
    
    // Bottom-left quadrant
    {
      type: 'orbiter',
      start: { x: 6, y: 15 },
      x: 6,
      y: 15,
      centerX: 6,
      centerY: 15,
      radius: 2.5,
      orbitSpeed: 3.8,
      angle: 180
    },
    
    // Bottom-right quadrant
    {
      type: 'orbiter',
      start: { x: 18, y: 15 },
      x: 18,
      y: 15,
      centerX: 18,
      centerY: 15,
      radius: 2.5,
      orbitSpeed: -3.8,
      angle: 270
    },
    
    // === PATROLS ===
    
    // Top horizontal patrol
    {
      type: 'patrol',
      x: 3,
      y: 4,
      direction: { x: 1, y: 0 },
      start: { x: 3, y: 4 },
      end: { x: 21, y: 4 },
      speed: 85
    },
    
    // Bottom horizontal patrol
    {
      type: 'patrol',
      x: 21,
      y: 17,
      direction: { x: -1, y: 0 },
      start: { x: 3, y: 17 },
      end: { x: 21, y: 17 },
      speed: 85
    },
    
    // Left vertical patrol
    {
      type: 'patrol',
      x: 3,
      y: 5,
      direction: { x: 0, y: 1 },
      start: { x: 3, y: 5 },
      end: { x: 3, y: 15 },
      speed: 80
    },
    
    // Right vertical patrol
    {
      type: 'patrol',
      x: 21,
      y: 15,
      direction: { x: 0, y: -1 },
      start: { x: 21, y: 5 },
      end: { x: 21, y: 15 },
      speed: 80
    },
    
    // Middle horizontal patrols (3)
    {
      type: 'patrol',
      x: 7,
      y: 10,
      direction: { x: 1, y: 0 },
      start: { x: 7, y: 10 },
      end: { x: 17, y: 10 },
      speed: 90
    },
    {
      type: 'patrol',
      x: 17,
      y: 11,
      direction: { x: -1, y: 0 },
      start: { x: 7, y: 11 },
      end: { x: 17, y: 11 },
      speed: 85
    },
    
    // === CHARGERS ===
    
    // Top chargers
    {
      type: 'charger',
      start: { x: 9, y: 2 },
      x: 9,
      y: 2,
      speed: 145,
      teleportInterval: 3200,
      aimDuration: 900
    },
    {
      type: 'charger',
      start: { x: 15, y: 2 },
      x: 15,
      y: 2,
      speed: 145,
      teleportInterval: 3600,
      aimDuration: 900
    },
    
    // Bottom chargers
    {
      type: 'charger',
      start: { x: 9, y: 18 },
      x: 9,
      y: 18,
      speed: 145,
      teleportInterval: 3400,
      aimDuration: 900
    },
    {
      type: 'charger',
      start: { x: 15, y: 18 },
      x: 15,
      y: 18,
      speed: 145,
      teleportInterval: 3800,
      aimDuration: 900
    },
    
    // === CHASERS ===
    
    // Corner chasers (avoiding player start at 1,1)
    {
      type: 'chaser',
      start: { x: 23, y: 1 },
      x: 23,
      y: 1,
      speed: 26
    },
    {
      type: 'chaser',
      start: { x: 1, y: 19 },
      x: 1,
      y: 19,
      speed: 26
    },
    {
      type: 'chaser',
      start: { x: 23, y: 19 },
      x: 23,
      y: 19,
      speed: 26
    },
    
    // Center chasers
    {
      type: 'chaser',
      start: { x: 12, y: 1 },
      x: 12,
      y: 1,
      speed: 24
    },
    {
      type: 'chaser',
      start: { x: 12, y: 19 },
      x: 12,
      y: 19,
      speed: 24
    }
  ]
};