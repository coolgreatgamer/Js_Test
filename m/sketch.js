let player, floor;

function setup() {
	new Canvas(700, 700);
	world.gravity.y = 10;
	player = new Sprite();
	player.scale = 2;
	player.img = 'mario.png';
	//player.debug = mouse.pressing();
	floor = new Sprite(250, 250, 1000, 40, 'static');

}

function draw() {
	clear();
	if (mouse.presses()) {
		player.vel.y = -4;
		player.vel.x = 3;
	}

	camera.x = player.x;
}
