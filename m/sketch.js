let player, floor;

function setup() {
	new Canvas(700, 700);
	world.gravity.y = 10;
	player = new Sprite();
	player.scale = 2;
	player.img = 'mario.png';
	//player.debug = mouse.pressing();
	//                   X    Y
	floor = new Sprite(250, 600, 10000, 40, 'static');

}

function draw() {
	clear();
	if (contro.pressing('a')) {
		player.vel.y = -4;
		player.vel.x = 3;
	}

	camera.x = player.x;
}
