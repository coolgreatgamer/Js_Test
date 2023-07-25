let playerImg;
let player;
let playerX =32;
let playerY =32;
let floor
let group;

let speed = 10;

function setup() {
  world.gravity.y = 5;
	floor = new Sprite(10, 500, 1500, 4, 's');
  floor = new Sprite(10, 400, 900, 4, 's');
  floor = new Sprite(10, 300, 700, 4, 's');
  floor = new Sprite(10, 200, 500, 4, 's');
  floor = new Sprite(10, 100, 300, 4, 's');
  floor = new Sprite(10, 50, 100, 4, 's');
  
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
    world.gravity.y = 5;
  } 
  if (kb.pressing(LEFT_ARROW)) {
    world.gravity.y = 5;
    player.position.x -= speed;
    world.gravity.y = 5;
  } 
  if (kb.pressing(DOWN_ARROW)) { 
    world.gravity.y = 5;
    //player.position.y += speed;
    world.gravity.y = 5;
  } 
  //disabeled due to the type of game.
  if (kb.pressing(UP_ARROW)) {
    world.gravity.y = 5;
    player.position.y -= speed;
    world.gravity.y = 5;
  }
  
}



function preload() {
  playerImg = loadImage("player.png")

}


function keyPressed() {

}
















const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
    // Check for input and move the player
    if (keys.ArrowUp) {
        player.y -= player.speed;
    }

    // Check if the player touches the roof
    if (player.y <= 0) {
        player.isTouchingRoof = true;
    }

    // Clear the canvas and draw the player
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();

    // Check if the player has won
    if (player.isTouchingRoof) {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'green';
        ctx.fillText('You Win!', canvas.width / 2 - 50, canvas.height / 2);
        return;
    }

    // Request the next animation frame
    requestAnimationFrame(update);
}

// Event listeners for input handling
const keys = {};
window.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

// Start the game loop
update();