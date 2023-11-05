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

		// dot.direction = random() * 360;
		// dot.speed = gameSpeed;

		dot.vel.x = 0.0;
		dot.vel.y = 0.0;
	}
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
	for (var i = 0; i<count;i++)
	{

		let spr = dots[i];


		spr.moveTo(0.0,0.0);

		//(dots[i]).moveTo(0,0);

		for (var j in dots)
		{
			//dots[i].moveTowards(mouse, 0.10);
			//dots[i].moveTo(0,0,1.0);
		}

		//dots[i].direction = 90;
		//dots[i].speed = 0.1;
		//dots[i].x += 1;
		//dots[i].diameter = 1; //1/dots[i].x;
		//dots[i].x = dots[i].x + (random() * 2 - 1);
		//dots.diameter = 1;
	}
}
