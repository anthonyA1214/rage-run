function drawWalls(r, g, b, wt) {
  fill(r, g, b);

  t = wt;

  walls = [
    { x: 0, y: 0, w: width, h: t }, // top
    { x: 0, y: height - t, w: width, h: t }, // bottom
    { x: 0, y: 0, w: t, h: height }, // left
    { x: width - t, y: 0, w: t, h: height }, // right
  ];

  noStroke();
  for (let w of walls) {
    rect(w.x, w.y, w.w, w.h);
  }
}
