let playerImg;
let player;
let playerX =32;
let playerY =32;
let floor
let group;

let enemyImg;
let enemy;

let speed = 5;

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
  enemy = new Sprite(100, 100, 32, 32);
  enemy.addImage(enemyImg);
}

function makeEnemyFollow()
{
  if (player.position.x > enemy.position.x) {
    enemy.position.x = enemy.position.x + 1;
  }
  
  if (player.position.x < enemy.position.x) {
    enemy.position.x = enemy.position.x - 1;
  }

  
  if (player.position.y > enemy.position.y) {
    enemy.position.y = enemy.position.y + 5;
  }
  
  if (player.position.y < enemy.position.y) {
    enemy.position.y = enemy.position.y - 5;
  }
}

function draw() {



  player.collide(enemy, lose);
  function lose(player) {
    player.remove();
    alert("nice try!")
  }
  //enemy.removeColliders();

  
  background("black");
  //drawSprites();
  
  makeEnemyFollow();

  //if you touch the enemy it will alert "nice try!"

    if (player.position == enemy.position) {
    
    }




  if (kb.pressing(RIGHT_ARROW)) {
    player.position.x += speed;
    if (player.position.x > 600) {
      player.position.x = 600;
      world.gravity.y = 5;
    }
  } 
  if (kb.pressing(LEFT_ARROW)) {
    player.position.x -= speed;
    if (player.position.x < 0) {
      player.position.x = 0;
      world.gravity.y = 5;
    }

  } 
  //if (kb.pressing(DOWN_ARROW)) { 
    //player.position.y += speed;
     //disabeled due to the type of game.
  //} 
  if (kb.pressing(UP_ARROW)) {
    player.position.y -= speed;
    if (player.position.y < 0) {
      player.position.y = 0;
      world.gravity.y = 5;
    }
  }
 
  






    if (enemy.position.x > 600) {
      enemy.position.x = 600;
    }

    if (enemy.position.x < 0) {
      enemy.position.x = 0;
    }

  
    if (enemy.position.y < 0) {
      enemy.position.y = 0;
    }
 
}







function preload() {
  playerImg = loadImage("player.png")
  enemyImg = loadImage("enemy.png")

}


function keyPressed() {

}







