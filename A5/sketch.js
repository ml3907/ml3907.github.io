//create an array for the particles
var particles = [];
var a
var b

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}


function draw() {
	background(0);
	for (i = 0; i <= hour.length; i++) {
		if (hour() < 12) {
			a = -5
			b = -1;
		} else {
			a = 5;
			b = 1;
		}
	}

	for (var i = 0; i < 5; i++) {
		var p = new Particle();
		particles.push(p); //create new particle and adds up to the array
	}
	
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();
		if (particles[i].dead()) {
		    particles.splice(i,1); //remove a particle in the array at the position of i
		}
	}

    text("How does the smoke change over time?", 50, 50);
    text("The velocity of smoke is represented by current hour/10,", 50, 80);
    text("and the lifespan of smoke is changed by minute/10.", 50, 110);
}

/*function mousePressed() {
	for (var i = 0; i < 300; i ++) {
		if (mouseX > 50 && mouseX < 150 && mouseY < 60 && mouseY > 50) {
			if (mouseIsPressed) {
	       	 text("Abstract: ", 50, 100);
	      	}
	  	}
	}
}*/

class Particle {
	constructor() {
		this.x = window.innerWidth/2;
		this.y = window.innerHeight/2;
		this.velx = random(-hour()/10, hour()/10);//what if the velocity change over time, e.g. change at different minute
		this.vely = random(a, b); //-5,-1
		this.lifespan = 100;
	}

	dead() {
			return this.lifespan < 0;
	}

	update() {
		this.x += this.velx;
		this.y += this.vely;
		this.lifespan -= minute()/10;
	}

	show() {
		noStroke();
		fill(220,this.lifespan);
		ellipse(this.x, this.y, 15);
	}
	//console.log(particles.length);

//same effect as the dead function above
/*	dead() {
		if (this.lifespan < 0) {
			return true;
		} else {
			return false;
		}
	}*/
}