let speed = [1, 10, 100, 1000];
let fall = random(speed); 
let floconnes = [] ;

function setup() {
createCanvas(windowWidth, windowHeight) ;
	
	for (let counter = 0 ; counter < 100 ; counter ++){
		floconnes.push( new ConneQuiFloque() ) ;
	}

}

function draw() {
background(9,14,34) ;
	for(let counter = 0 ; counter < 100 ; counter ++){
		floconnes[counter].display() ;
	}
}

class ConneQuiFloque{
	constructor(){
		this.posX = random(width) ;
		this.posY = random(height) ;
		
				
	}
	display(){
		fill(255) ;
		noStroke() ;
		ellipse(this.posX,this.posY,20,20) ;
		this.posY = this.posY + fall ;
	}
}



