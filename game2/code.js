let player;
let playerX =300
let playerY =100

createCanvas(600, 600);


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
  if (kb.presses('space')) {
	background(0, 255, 0);
  }
}