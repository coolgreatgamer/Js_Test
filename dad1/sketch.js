let player, floor;

let dots;

let count = 10;

let gameSpeed = 1.0;

function setup() {
	new Canvas(500, 500);

	dots = new Group();
	dots.color = 'white';
	dots.diameter = 10;

	for (let i=0;i<count;i++)
	{
		let dot = new dots.Sprite()
		dot.x = random() * 500;
		dot.y = random() * 500;

		dot.direction = random() * 360;
		dot.speed = gameSpeed;
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
	updateDots();

	background(51);

	if (kb.presses('space')) {
		//player.vel.y = -4;
		//player.vel.x = 3;
	}

	//camera.x = player.x;
}

function updateDots()
{
	for (var i in dots)
	{
		//dots[i].direction = 90;
		//dots[i].speed = 0.1;
		//dots[i].x += 1;
		//dots[i].diameter = 1; //1/dots[i].x;
		//dots[i].x = dots[i].x + (random() * 2 - 1);
		//dots.diameter = 1;
	}
}
