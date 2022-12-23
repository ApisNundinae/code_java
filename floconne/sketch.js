let speedb = 5 ;
let flocons = [] ;

function setup() {
createCanvas(windowWidth, windowHeight) ;
	
	for (let counter = 0 ; counter < 100 ; counter ++){
		flocons.push( new floque() ) ;
	}
	noLoop() ;
}

function draw() {
background(9,14,34) ;
	for(let counter = 0 ; counter < 100 ; counter ++){
		flocons[counter].display() ;
		
	}
}

class floque{
	constructor(){

		
		if(this.posY < windowHeight) {
		this.posY = -20 ;
	
		}
		else{
		this.posX = random(width) ;
		this.posY = random(height) ;
		}
				
	}
	display(){
		fill(255) ;
		noStroke() ;
		ellipse(this.posX,this.posY,20,20) ;
		this.posY = this.posY + speedb ;
	}
}
function mousePressed() {
	loop() ;
	
	
}