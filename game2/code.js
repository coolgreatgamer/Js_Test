let playerImg;
let player;
let playerX =32;
let playerY =32;

let group;

let speed = 1;

function setup() {
  createCanvas(600, 600);

  //group = new group()
	player = new Sprite(width/2, height/2, playerX, playerY);
  player.addImage(playerImg);
}

function draw() {
  background("black");
  drawSprites();

  if (kb.pressing(RIGHT_ARROW)) {
    player.position.x += speed; 
  } 
  if (kb.pressing(LEFT_ARROW)) {
    player.position.x -= speed; 
  } 
  if (kb.pressing(DOWN_ARROW)) { 
    player.position.y += speed;
  } 
  if (kb.pressing(UP_ARROW)) {
    player.position.y -= speed;
  }
}


function preload() {
  playerImg = loadImage("player.png")

}


function keyPressed() {

}
