let sentence=['happy chrysler thanks for pressing'];
let word;
let x =200 ;
let y= 200 ;
let ts=50;
let speed=2;
let r= 0 ;


let speedb = 5 ;
let flocons = [] ;

function setup() {
	createCanvas(windowWidth, windowHeight) ;
	
	textAlign(CENTER, CENTER) ; 
	
	setTimeout(eventOne, 1000);
	
	for (let counter = 0 ; counter < 1000 ; counter ++){
		flocons.push( new floque() ) ;
	}
	
	noLoop() ;
}

function eventOne(){
	console.log('first event being triggered!');
	word = sentence[0];
	
		
}

function draw() {
	noStroke();
	background(150,0,0) ;
	textSize(ts);
	fill(141,224,150) ;	
	text(word,x, y) ;
	x = x+speed ;
	
	for(let counter = 0 ; counter < 1000 ; counter ++){
		flocons[counter].display() ;
		

	
	
	}
}

class floque{
	constructor(){

		this.posX = random(width) ;
		this.posY = random(-5000,50) ;
		
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









