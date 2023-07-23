let playerImg;
let player;
let playerX =32;
let playerY =32;

let group;

function setup() {
  createCanvas(600, 600);

  //group = new group()
	player = new Sprite(width/2, height/2, playerX, playerY);
  player.addImage(playerImg);
}

function draw() {
  background("black");
  drawSprites();
}


function preload() {
  playerImg = loadImage("player.png")

}


function keyPressed() {
    //if (keyIsDown(RIGHT_ARROW)) {
    //  player.position.x += speed; 
    // } 
    // if (keyIsDown(LEFT_ARROW)) {
    //  player.position.x -= speed; 
    //  } 
    //  if (keyIsDown(DOWN_ARROW)) { 
    //    player.position.y += speed;
    //  } 
    //  if (keyIsDown(UP_ARROW)) {
    //    player.position.y -= speed;
    //   }

    if (keyCode == RIGHT_ARROW) {
      player.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
      player.setSpeed(1.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
      player.setSpeed(1.5, 180);
    }
    else if (keyCode == UP_ARROW) {
      player.setSpeed(1.5, 270);
    }
    else if (key == ' ') {
      player.setSpeed(0, 0);
    }
}
