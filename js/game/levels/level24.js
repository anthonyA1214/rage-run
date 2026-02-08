const level24 = {
  cols: 20,
  rows: 22,
  cellSize: 30,
  arena: [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,
    1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,
    1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,
    1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,
    1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,
    1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,
    1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,
    1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,
    1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,
    1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,
    1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,
    1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,
    1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,
    1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,
    1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,
    1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,
    1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,
    1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 1, y: 1 },
  exit: { x: 18, y: 20 },

  orbs: [
    { x: 3, y: 1 },
    { x: 17, y: 1 },
    { x: 10, y: 4 },
    { x: 3, y: 10 },
    { x: 14, y: 11 },
    { x: 2, y: 20 },
    { x: 17, y: 18 },
    { x: 10, y: 16 },
  ],
  enemies: [
    // ===== BOUNCERS =====
    {
      type: 'bouncer',
      start: { x: 9, y: 6 },
      x: 9,
      y: 6,
      speed: 60,
      startDirection: { x: 0, y: 1 },
      direction: { x: 0, y: 1 }
    },
    {
      type: 'bouncer',
      start: { x: 13, y: 8 },
      x: 13,
      y: 8,
      speed: 65,
      startDirection: { x: -1, y: 0 },
      direction: { x: -1, y: 0 }
    },
    {
      type: 'bouncer',
      start: { x: 7, y: 16 },
      x: 7,
      y: 16,
      speed: 55,
      startDirection: { x: 0.7, y: -0.7 },
      direction: { x: 0.7, y: -0.7 }
    },
    {
      type: 'bouncer',
      start: { x: 15, y: 6 },
      x: 15,
      y: 6,
      speed: 60,
      startDirection: { x: 0, y: 1 },
      direction: { x: 0, y: 1 }
    },
    {
      type: 'bouncer',
      start: { x: 4, y: 12 },
      x: 4,
      y: 12,
      speed: 58,
      startDirection: { x: 1, y: 0 },
      direction: { x: 1, y: 0 }
    },
    {
      type: 'bouncer',
      start: { x: 12, y: 14 },
      x: 12,
      y: 14,
      speed: 62,
      startDirection: { x: -0.7, y: 0.7 },
      direction: { x: -0.7, y: 0.7 }
    },
    {
      type: 'bouncer',
      start: { x: 5, y: 8 },
      x: 5,
      y: 8,
      speed: 60,
      startDirection: { x: 0, y: 1 },
      direction: { x: 0, y: 1 }
    },

    // ===== PATROLS =====
    {
      type: 'patrol',
      start: { x: 3, y: 10 },
      end: { x: 3, y: 18 },
      x: 3,
      y: 10,
      direction: { x: 0, y: 1 },
      speed: 55
    },
    {
      type: 'patrol',
      start: { x: 17, y: 1 },
      end: { x: 17, y: 8 },
      x: 17,
      y: 1,
      direction: { x: 0, y: 1 },
      speed: 55
    },
    {
      type: 'patrol',
      start: { x: 10, y: 7 },
      end: { x: 10, y: 13 },
      x: 10,
      y: 7,
      direction: { x: 0, y: 1 },
      speed: 50
    },
    {
      type: 'patrol',
      start: { x: 6, y: 11 },
      end: { x: 14, y: 11 },
      x: 6,
      y: 11,
      direction: { x: 1, y: 0 },
      speed: 50
    },

    // ===== CHASERS (REDUCED) =====
    {
      type: 'chaser',
      start: { x: 6, y: 6 },
      x: 6,
      y: 6,
      speed: 36
    },
    {
      type: 'chaser',
      start: { x: 14, y: 15 },
      x: 14,
      y: 15,
      speed: 38
    },

    // ===== CHARGERS =====
    {
      type: 'charger',
      start: { x: 15, y: 10 },
      x: 15,
      y: 10,
      speed: 135,
      teleportInterval: 2300,
      aimDuration: 1100
    },
    {
      type: 'charger',
      start: { x: 8, y: 3 },
      x: 8,
      y: 3,
      speed: 130,
      teleportInterval: 2500,
      aimDuration: 1000
    },

    // ===== ORBITERS (SPREAD AROUND MAP) =====
    {
      type: 'orbiter',
      start: { x: 10, y: 11 },
      x: 10,
      y: 11,
      centerX: 10,
      centerY: 11,
      radius: 2,
      orbitSpeed: 3,
      startAngle: 0
    },
    {
      type: 'orbiter',
      start: { x: 16, y: 14 },
      x: 16,
      y: 14,
      centerX: 16,
      centerY: 14,
      radius: 2,
      orbitSpeed: -3,
      startAngle: 90
    },
    {
      type: 'orbiter',
      start: { x: 4, y: 8 },
      x: 4,
      y: 8,
      centerX: 4,
      centerY: 8,
      radius: 3,
      orbitSpeed: 2,
      startAngle: 180
    }
  ]
};
