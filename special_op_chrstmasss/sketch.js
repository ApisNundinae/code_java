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
background(150,0,0) ;
	for(let counter = 0 ; counter < 100 ; counter ++){
		flocons[counter].display() ;
		
	}
}

class floque{
	constructor(){

		this.posX = random(width) ;
		this.posY = random(height) ;
		
		if(this.posY < windowHeight + 20 ) {
		this.posY = this.posY - windowHeight -20	 ;
	
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



