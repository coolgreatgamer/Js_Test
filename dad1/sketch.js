let player, floor;

let dots;

let count = 100;

let gameSpeed = 1.0;

function setup() {
	new Canvas(500, 500);

	dots = new Group();
	//dots.color = 'white';
	dots.diameter = 5;

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

		if (dots[i].x < 5) dots[i].x = 5;
		if (dots[i].y < 5) dots[i].y = 5;
		if (dots[i].x > 455) dots[i].x = 455;
		if (dots[i].y > 455) dots[i].y = 455;

		//dots[i].moveTo(0.0,0.0);

		//(dots[i]).moveTo(0,0);

		for (var j = 0; j<count;j++)
		{
			//let d2 = distt(dots[j], dots[i]);

			//dots[i].moveTowards(dots[j].x, dots[j].y,0.01);
			//dots[i].attractTo(dots[j],30.0/d2);
			attract(dots[i], dots[j], -1.0);
		}


		attract(dots[i], mouse, 1.0);

		// let d = distt(mouse, dots[i]);
		// if (typeof d !== 'undefined') {
		// 	dots[i].moveAway(mouse, 10.0/d);
		// }

		//dots[i].direction = 90;
		//dots[i].speed = 0.1;
		//dots[i].x += 1;
		//dots[i].diameter = 1; //1/dots[i].x;
		//dots[i].x = dots[i].x + (random() * 2 - 1);
		//dots.diameter = 1;
	}
}

function attract(ob1, ob2, str)
{
	let d = distt(ob1,ob2);

	if (typeof d == 'undefined') return;
	if (d == 0) return;

	ob1.vel.x += (ob1.x-ob2.x) / d * str;
	ob1.vel.y += (ob1.y-ob2.y) / d * str;

}


function distt(ob1, ob2)
{
	let x = Math.pow(ob1.x-ob2.x,2);	
	let y = Math.pow(ob1.y-ob2.y,2);

	let d = x+y;
	//let d = Math.sqrt(x+y);

	return d;
}
