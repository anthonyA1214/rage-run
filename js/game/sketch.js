let player, playerImg;
let npc;

Game.level = 1;

function preload() {
  playerImg = loadImage("/assets/nomad.png");
  npcImg = loadImage("/assets/ply.png");
}

function setup() {
  const canvas = createCanvas(750, 750);
  canvas.parent("container");

  if (Game.level === 1) {
    player = new Player(70, 70, playerImg, 50);
    npc = new Entity(width - 70, height - 70, npcImg, 50);
  }
}

function draw() {
  console.log(Game.level);

  background(220);

  // Debug: draw player hitbox
  // noFill();
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // ellipse(this.pos.x, this.pos.y, this.size, this.size);

  // start pos
  if (Game.level === 1) {
    drawLevel1();
  }

  // Update and draw entities
  if (!Game.levelCompleted) {
    player.update();
    player.draw();
    npc.draw();
  }

  if (!Game.levelCompleted && checkCollision(player, npc)) {
    Game.levelCompleted = true;
  }

  if (Game.levelCompleted) {
    displayLevelComplete();
  }

  if (Game.levelCompleted && keyIsDown(32)) {
    nextLevel();
  }

  // draw border walls
  drawWalls(120, 120, 120, 20);

  // Display level
  // outline
  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text("Level: " + Game.level, 10, 10);
}

function checkCollision(entity1, entity2) {
  let distance = dist(
    entity1.pos.x,
    entity1.pos.y,
    entity2.pos.x,
    entity2.pos.y,
  );
  let minDistance = (entity1.size + entity2.size) / 2;
  return distance < minDistance;
}

function displayLevelComplete() {
  // Visual indicator
  fill(0, 200, 0, 150);
  rect(0, 0, width, height);

  noStroke();
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("LEVEL COMPLETE!", width / 2, height / 2);

  textSize(24);
  text("Press SPACE to continue", width / 2, height / 2 + 60);
}

function clearEntities() {
  player = null;
  npc = null;
}

function nextLevel() {
  clearEntities();
  Game.level += 1;
  Game.levelCompleted = false;

  if (Game.level === 2) {
    player = new Player(70, 70, playerImg, 50);
    npc = new Entity(width - 70, height - 70, npcImg, 50);
  }
}
