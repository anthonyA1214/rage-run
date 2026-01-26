let img;

function preload() {
  img = loadImage("../../assets/nomad.png");
}

function setup() {
  const canvas = createCanvas(750, 750);
  canvas.parent("container");
}

function draw() {
  background(220);
  image(img, 0, 0);
}
