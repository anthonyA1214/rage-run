const level3 = {
  cols: 11,
  rows: 11,
  cellSize: 40,

  arena: [
    1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,
  ],

  playerStart: { x: 9, y: 9 },

  exit: { x: 9, y: 9 },

  orbs: [
    { x: 3, y: 3 },
    { x: 3, y: 7 },
    { x: 7, y: 3 }
    
  ],
  
  enemies: [
    {
      type: 'patrol',
      x: 2,
      y: 5,
      direction: { x: 1, y: 0 },
      start: { x: 1, y: 5 },
      end: { x: 9, y: 5 },
      speed: 100 // tiles per second (higher = faster)
    },
    {
      type: 'patrol',
      x: 5,
      y: 2,
      direction: { x: 0, y: 1 },
      start: { x: 5, y: 1 },
      end: { x: 5, y: 9 },
      speed: 100 // slower enemy
    }
  ]
}