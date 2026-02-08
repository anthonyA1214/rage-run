const level20 = {
  cols: 25,
  rows: 21,

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
    // === ORBITERS ===
    
    // Large central orbiter system - the main challenge
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5,
      orbitSpeed: 2.8,
      angle: 0
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5,
      orbitSpeed: 2.8,
      angle: 90
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5,
      orbitSpeed: 2.8,
      angle: 180
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 5,
      orbitSpeed: 2.8,
      angle: 270
    },
    
    // Inner ring - faster, opposite direction
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 3,
      orbitSpeed: -4,
      angle: 45
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 10 },
      x: 12,
      y: 10,
      centerX: 12,
      centerY: 10,
      radius: 3,
      orbitSpeed: -4,
      angle: 135
    },
    
    // Top-left quadrant orbiter
    {
      type: 'orbiter',
      start: { x: 6, y: 5 },
      x: 6,
      y: 5,
      centerX: 6,
      centerY: 5,
      radius: 2.5,
      orbitSpeed: 3.5,
      angle: 0
    },
    
    // Top-right quadrant orbiter
    {
      type: 'orbiter',
      start: { x: 18, y: 5 },
      x: 18,
      y: 5,
      centerX: 18,
      centerY: 5,
      radius: 2.5,
      orbitSpeed: -3.5,
      angle: 90
    },
    
    // Bottom-left quadrant orbiter
    {
      type: 'orbiter',
      start: { x: 6, y: 15 },
      x: 6,
      y: 15,
      centerX: 6,
      centerY: 15,
      radius: 2.5,
      orbitSpeed: 3.5,
      angle: 180
    },
    
    // Bottom-right quadrant orbiter
    {
      type: 'orbiter',
      start: { x: 18, y: 15 },
      x: 18,
      y: 15,
      centerX: 18,
      centerY: 15,
      radius: 2.5,
      orbitSpeed: -3.5,
      angle: 270
    },
    
    // === PATROLS ===
    
    // Top horizontal patrol
    {
      type: 'patrol',
      x: 3,
      y: 3,
      direction: { x: 1, y: 0 },
      start: { x: 3, y: 3 },
      end: { x: 21, y: 3 },
      speed: 75
    },
    
    // Bottom horizontal patrol
    {
      type: 'patrol',
      x: 21,
      y: 17,
      direction: { x: -1, y: 0 },
      start: { x: 3, y: 17 },
      end: { x: 21, y: 17 },
      speed: 75
    },
    
    // Left vertical patrol
    {
      type: 'patrol',
      x: 3,
      y: 5,
      direction: { x: 0, y: 1 },
      start: { x: 3, y: 5 },
      end: { x: 3, y: 15 },
      speed: 70
    },
    
    // Right vertical patrol
    {
      type: 'patrol',
      x: 21,
      y: 15,
      direction: { x: 0, y: -1 },
      start: { x: 21, y: 5 },
      end: { x: 21, y: 15 },
      speed: 70
    },
    
    // Middle horizontal patrol
    {
      type: 'patrol',
      x: 7,
      y: 10,
      direction: { x: 1, y: 0 },
      start: { x: 7, y: 10 },
      end: { x: 17, y: 10 },
      speed: 80
    },
    
    // === CHARGERS ===
    
    // Top charger - teleports around top half
    {
      type: 'charger',
      start: { x: 12, y: 2 },
      x: 12,
      y: 2,
      speed: 130,
      teleportInterval: 3800,
      aimDuration: 950
    },
    
    // Bottom charger - teleports around bottom half
    {
      type: 'charger',
      start: { x: 12, y: 18 },
      x: 12,
      y: 18,
      speed: 130,
      teleportInterval: 4200,
      aimDuration: 950
    },
    
    // === CHASERS ===
    
    // Left side chaser
    {
      type: 'chaser',
      start: { x: 1, y: 10 },
      x: 1,
      y: 10,
      speed: 24
    },
    
    // Right side chaser
    {
      type: 'chaser',
      start: { x: 23, y: 10 },
      x: 23,
      y: 10,
      speed: 24
    },
    
    // Top chaser
    {
      type: 'chaser',
      start: { x: 12, y: 1 },
      x: 12,
      y: 1,
      speed: 22
    }
  ]
};