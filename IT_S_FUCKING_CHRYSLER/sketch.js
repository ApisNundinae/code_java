let sentence=['happy','chrysler'];
let word;
let x =200 ;
let y= 200 ;
let ts=50;
let speed=2;
let r= 0 ;
function setup() {
createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER) ; 
	setTimeout(eventOne, 1000);

setTimeout(eventTwo, 3000);

function eventOne(){
	console.log('first event being triggered!');
	word = sentence[0];
	
		
}

function eventTwo(){
	console.log('second event being triggered!');
	word = sentence[1];
	ts = 60;	
	speed=-1 ;

}
}

function draw() {
	noStroke();
	background(255,0,0) ;
	textSize(ts);
	fill(255) ;
	text(word,x, y) ;
	x = x+speed ;
	
}
