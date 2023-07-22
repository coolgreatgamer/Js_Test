let canvasWidth = 640;
let canvasHeight = 480;

let cat;
let catX = 300;
let catY = 100;
let speed = 4;

let hat_0;
let hat_0X = 300;
let hat_0Y = 100;

let gomba20;
let gomba20X = 300;
let gomba20Y = 100;

let bonk;
let bonkX = 300;
let bonkY = 100;

function enemyMovements() {
  direction += 2;
  enemy.setSpeed(3, direction);
  gomba20.attractionPoint(0.2, cat.position.x, cat.position.y);
  gomba20.maxSpeed = 4;
}


function preload() {
  console.log("hello∞");

  cat = loadImage("images/cat.png")
  hat = loadImage("images/my_other_one/sprite_0.png");
  goomba = loadImage("images/my_foldR/sprite_20.png");
  bonk = loadImage("images/bonk.png");
}
function setup() {
  print("setup");
  console.log("me too");

  createCanvas(canvasWidth, canvasHeight);

  enemies = new Group();

  //cat

  cat = createSprite(width/2, height/2, catX, catY);
  cat.addImage(catImg);
  //cat.add(catPlayer);

  //sprite_0 (evil hat)
  hat_0 = createSprite(hat_0X, hat_0Y);
  hat_0.addImage(hatImg);
  enemies.add(sprite_0);

  //sprite_20 (goomba)
  gomba_20 = createSprite(goomba_20X, goomba_20Y);
  gomba_20.addImage(goombaImg);
  enemies.add(gomba_20)

  //bonk (bOnK)
  bonk = createSprite(bonkX, bonkY);
  Bonk.addImage(bonkImg)
  projectiles = new Group(bonk);
}

function mousePressed() {
  let projectile12345 = createSprite(cat.position.x, cat.position.y);
  projectile12345.addImage("images/bonk.png");
  //projectile.setCollider("rectangle", 0, 0, 40, 40);
  projectile.attractionPoint(10 + speed, mouseX, mouseY);
  projectiles.add(projectile);
}

function playerControls() {
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += speed; 
   } 
   if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= speed; 
    } 
    if (keyIsDown(DOWN_ARROW)) { 
      player.position.y += speed;
    } 
    if (keyIsDown(UP_ARROW)) {
      player.position.y -= speed;
     }
}
function draw() {
  drawSprites();
  playerControls();
  background("beige");
}























/*
window.addEventListener("click", (e) => {
  alert("test")
  e.preventDefault();
  let projectile12345 = createSprite(cat.position.x, cat.position.y);
  projectile12345.addImage("images/bonk.png");
  projectile.setCollider("rectangle", 0, 0, 40, 40);
  projectile.attractionPoint(10+speed, mouseX, mouseY); 
  projectiles.add(projectile); })
*/