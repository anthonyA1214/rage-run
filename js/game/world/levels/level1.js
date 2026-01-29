function drawLevel1() {
  // Draw border walls first
  drawWalls(120, 120, 120, 20);

  stroke(0);
  strokeWeight(1);
  fill(0, 255, 0);
  rect(20, 20, 100, 100); // Start area

  fill(255, 0, 0);
  rect(width - 120, height - 120, 100, 100); // End area

  // Add level-specific walls to the existing walls array
  walls.push(
    { x: 0, y: 120, w: 600, h: 20 },
    { x: 150, y: height - 140, w: 600, h: 20 },
    // Add more walls as needed
  );

  // Draw all walls
  fill(120);
  for (let w of walls) {
    rect(w.x, w.y, w.w, w.h);
  }
}
