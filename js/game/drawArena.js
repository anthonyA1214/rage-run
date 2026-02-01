function drawArena() {
  let level = levels[Game.currentLevel];

  for (let i = 0; i < level.arena.length; i++) {
    if (level.arena[i] === 1) {
      let x = i % level.cols;
      let y = floor(i / level.cols);
      
      fill('#3F4A5B');
      rect(x * Game.cellSize, y * Game.cellSize, Game.cellSize, Game.cellSize);
    }
  }
}