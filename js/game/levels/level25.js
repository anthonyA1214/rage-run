const level25 = {
  cols: 24,
  rows: 24,
  cellSize: 30,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,
    1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,
    1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,
    1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,
    1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,
    1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
    1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },
  exit: { x: 22, y: 22 },

  orbs: [
    { x: 3, y: 1 },
    { x: 22, y: 1 },
    { x: 13, y: 5 },
    { x: 6, y: 11 },
    { x: 18, y: 11 },
    { x: 12, y: 13 },
    { x: 4, y: 17 },
    { x: 19, y: 17 },
    { x: 12, y: 21 },
    { x: 1, y: 22 },
  ],

  enemies: [
    // ===== BOUNCERS (5 total) =====
    {
      type: 'bouncer',
      start: { x: 6, y: 7 },
      x: 6,
      y: 7,
      speed: 58,
      startDirection: { x: 1, y: 0 },
      direction: { x: 1, y: 0 }
    },
    {
      type: 'bouncer',
      start: { x: 18, y: 6 },
      x: 18,
      y: 6,
      speed: 56,
      startDirection: { x: -1, y: 0 },
      direction: { x: -1, y: 0 }
    },
    {
      type: 'bouncer',
      start: { x: 12, y: 9 },
      x: 12,
      y: 9,
      speed: 60,
      startDirection: { x: 0, y: 1 },
      direction: { x: 0, y: 1 }
    },
    {
      type: 'bouncer',
      start: { x: 8, y: 17 },
      x: 8,
      y: 17,
      speed: 54,
      startDirection: { x: 0.7, y: -0.7 },
      direction: { x: 0.7, y: -0.7 }
    },
    {
      type: 'bouncer',
      start: { x: 16, y: 16 },
      x: 16,
      y: 16,
      speed: 59,
      startDirection: { x: -0.7, y: -0.7 },
      direction: { x: -0.7, y: -0.7 }
    },

    // ===== PATROLS (5 total) =====
    {
      type: 'patrol',
      start: { x: 4, y: 1 },
      end: { x: 4, y: 6 },
      x: 4,
      y: 1,
      direction: { x: 0, y: 1 },
      speed: 48
    },
    {
      type: 'patrol',
      start: { x: 20, y: 1 },
      end: { x: 20, y: 5 },
      x: 20,
      y: 1,
      direction: { x: 0, y: 1 },
      speed: 46
    },
    {
      type: 'patrol',
      start: { x: 8, y: 9 },
      end: { x: 16, y: 9 },
      x: 8,
      y: 9,
      direction: { x: 1, y: 0 },
      speed: 45
    },
    {
      type: 'patrol',
      start: { x: 13, y: 7 },
      end: { x: 13, y: 3 },
      x: 13,
      y: 7,
      direction: { x: 0, y: -1 },
      speed: 47
    },
    {
      type: 'patrol',
      start: { x: 8, y: 15 },
      end: { x: 16, y: 15 },
      x: 8,
      y: 15,
      direction: { x: 1, y: 0 },
      speed: 46
    },

    // ===== CHASERS (3 total) =====
    {
      type: 'chaser',
      start: { x: 12, y: 4 },
      x: 12,
      y: 4,
      speed: 20
    },
    {
      type: 'chaser',
      start: { x: 6, y: 11 },
      x: 6,
      y: 11,
      speed: 22
    },
    {
      type: 'chaser',
      start: { x: 18, y: 11 },
      x: 18,
      y: 11,
      speed: 21
    },

    // ===== CHARGERS (2 total) =====
    {
      type: 'charger',
      start: { x: 12, y: 12 },
      x: 12,
      y: 12,
      speed: 120,
      teleportInterval: 3000,
      aimDuration: 1200
    },
    {
      type: 'charger',
      start: { x: 12, y: 18 },
      x: 12,
      y: 18,
      speed: 118,
      teleportInterval: 3200,
      aimDuration: 1250
    },

    // ===== ORBITERS (3 total) =====
    {
      type: 'orbiter',
      start: { x: 6, y: 6 },
      x: 6,
      y: 6,
      centerX: 6,
      centerY: 6,
      radius: 2.5,
      orbitSpeed: 2.5,
      startAngle: 0
    },
    {
      type: 'orbiter',
      start: { x: 18, y: 6 },
      x: 18,
      y: 6,
      centerX: 18,
      centerY: 6,
      radius: 2.5,
      orbitSpeed: -2.5,
      startAngle: 90
    },
    {
      type: 'orbiter',
      start: { x: 12, y: 19 },
      x: 12,
      y: 19,
      centerX: 12,
      centerY: 19,
      radius: 2.5,
      orbitSpeed: 2.7,
      startAngle: 180
    }
  ]
};