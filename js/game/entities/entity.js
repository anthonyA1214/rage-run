class Entity {
  constructor(x, y, img, size = 30) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.size = size;
    this.speed = 2;
    this.img = img;
  }

  update() {
    this.pos.add(this.vel);
  }

  draw() {
    // Draw the entity as an image
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.size, this.size);
  }
}
