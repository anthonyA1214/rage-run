class Player extends Entity {
  constructor(x, y, img, size = 30) {
    super(x, y, img, size);
    this.speed = 6;
  }

  handleInput() {
    this.vel.set(0, 0);

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.vel.x = -this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.vel.x = this.speed;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.vel.y = -this.speed;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.vel.y = this.speed;
    }

    // Normalize diagonal movement
    if (this.vel.mag() > this.speed) {
      this.vel.setMag(this.speed);
    }
  }

  checkWallCollision(newX, newY) {
    // Check collision with each wall
    for (let wall of walls) {
      // Calculate player's bounding box at new position
      let playerLeft = newX - this.size / 2;
      let playerRight = newX + this.size / 2;
      let playerTop = newY - this.size / 2;
      let playerBottom = newY + this.size / 2;

      // Check if player overlaps with wall (AABB collision)
      if (
        playerRight > wall.x &&
        playerLeft < wall.x + wall.w &&
        playerBottom > wall.y &&
        playerTop < wall.y + wall.h
      ) {
        return true; // Collision detected
      }
    }
    return false; // No collision
  }

  update() {
    this.handleInput();

    // Calculate new position
    let newX = this.pos.x + this.vel.x;
    let newY = this.pos.y + this.vel.y;

    // Check X-axis collision
    if (!this.checkWallCollision(newX, this.pos.y)) {
      this.pos.x = newX;
    }

    // Check Y-axis collision
    if (!this.checkWallCollision(this.pos.x, newY)) {
      this.pos.y = newY;
    }

    // No need for constrain() - the border walls handle boundaries!
  }
}
