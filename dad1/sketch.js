let player, floor;

let dots;

function setup() {
	new Canvas(500, 500);

	dots = new Group();
	dots.color = 'white';
	dots.diameter = 10;

	for (let i=0;i<10;i++)
	{
		let dot = new dots.Sprite()
		dot.x = i*5;
		dot.y = i*5;
	}
	
	//world.gravity.y = 10;

	//player = new Sprite();
	//player.scale = 2;
	//player.img = 'mario.png';
	
	//player.debug = mouse.pressing();
	//                   X    Y
	//floor = new Sprite(250, 600, 10000, 40, 'static');

}

function draw() {
	clear();

	background(51);

	if (kb.presses('space')) {
		//player.vel.y = -4;
		//player.vel.x = 3;
	}

	//camera.x = player.x;
}
