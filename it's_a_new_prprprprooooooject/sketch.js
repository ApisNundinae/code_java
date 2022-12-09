function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(247,222,186);
}

function draw() {
  // put drawing code here
noStroke() ;

background(228,223,231) ;

fill(84,32,29) ;
rect(100,100,width - 2 * 100,height - 2 * 100) ;

fill(124,113,133) ;	
textAlign(CENTER, CENTER) ;
text("I am suffering",width / 2,50) ;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}