let playerImg;
let player;
let playerX =32;
let playerY =32;
let floor
let group;

let speed = 5;

function setup() {
  world.gravity.y = 5;
	floor = new Sprite(40, 500, 500, 5, 's');
  createCanvas(600, 600);

  //group = new group()
	player = new Sprite(width/2, height/2, playerX, playerY);
  player.addImage(playerImg);
}

function draw() {
  background("black");
  drawSprites();

  if (kb.pressing(RIGHT_ARROW)) {
    world.gravity.y = 5;
    player.position.x += speed; 
  } 
  if (kb.pressing(LEFT_ARROW)) {
    world.gravity.y = 5;
    player.position.x -= speed; 
  } 
  if (kb.pressing(DOWN_ARROW)) { 
    world.gravity.y = 5;
    player.position.y += speed;
  } 
  if (kb.pressing(UP_ARROW)) {
    world.gravity.y = 5;
    player.position.y -= speed;
  }
}


function preload() {
  playerImg = loadImage("player.png")

}


function keyPressed() {

}
