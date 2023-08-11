var mcs = [];
let playerImg;
let player;
let playerSize =32;
let floor
let group;

let enemySize = 32;
let canvasSize = 600;

let speed = 5;

function setup() {
  
  world.gravity.y = 5;
	floor = new Sprite(10, 500, 1500, 4, 's');
  floor = new Sprite(10, 400, 900, 4, 's');
  floor = new Sprite(10, 300, 700, 4, 's');
  floor = new Sprite(10, 200, 500, 4, 's');
  floor = new Sprite(10, 100, 300, 4, 's');
  floor = new Sprite(10, 50, 100, 4, 's');
  
  createCanvas(canvasSize, canvasSize);

  //group = new group()
	player = new Sprite(width/2, height/2, playerSize, playerSize);
  player.addImage(playerImg);
}

//example:RIGHT_ARROW or LEFT_ARROW
  

  if (kb.pressing('right')) {
    player.position.x += speed;
    if (player.position.x > canvasSize - playerSize / 2) {
      player.position.x = canvasSize - playerSize / 2;
      world.gravity.y = 5;
    }
  } 
  if (kb.pressing('left')) {
    player.position.x -= speed;
    if (player.position.x < playerSize / 2) {
      player.position.x = playerSize / 2;
      world.gravity.y = 5;
    }

  } 
  if (kb.pressing('down')) { 
    player.position.y += speed;
     //disabeled due to the type of game.
     world.gravity.y = 0

     if (player.position.y > 600) {
      player.position.y = 600;
      
    }
  } 
  if (kb.pressing('up')) {
    player.position.y -= speed;
    if (player.position.y < playerSize / 2) {
      player.position.y = playerSize / 2;
      world.gravity.y = 5;
    }
  }

function preload() {
  playerImg = loadImage("player.png")
  enemyImg = loadImage("enemy.png")

}


function keyPressed() {

}







