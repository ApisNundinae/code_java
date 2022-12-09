let degwaday;

function setup() {
	createCanvas(windowWidth, windowHeight) ;
	degwaday = curvyGradiant(width, height,27, 28, 46,140, 28, 54) ;
}

function draw() {
	background(0);
		stroke(255,255,255) ;
	image(degwaday, 0, 0, width, height);
		let counter = 0 ;
	while(counter < 50){
		robo_Moulinex_Shiny_3000_Du_Turfu_pneumonoultramicroscopicsilicovolcanoconiosis(
			noise(1,2 + counter, counter) * width , 
			noise(2,1 + counter, counter) * height , noise(1)*5, noise(2)*5) ;
		counter ++ ;
	}
}


function robo_Moulinex_Shiny_3000_Du_Turfu_pneumonoultramicroscopicsilicovolcanoconiosis(x, y, w, h) {
	push();
	translate(x, y) ;

	if(frameCount%5==0){
	 //big
	  line(0,-5*w,0,5*w) ;	
	  line(-5*h,0,5*h,0) ;
	}
    else{
	 //small
	  line(0,-2*w,0,2*w) ;	
	  line(-2*h,0,2*h,0) ;

	}
	pop();
	
}

function straightGradiant(w,h,r1,g1,b1,r2,g2,b2,r3,g3,b3) {
	let graphic = createGraphics(w, h) ;	
	for(let i = 0; i < h; i ++){
		let red = map(i, 0, h, r1, r2) ;
		let green = map(i, 0, h, g1, g2) ;
		let blue = map(i, 0, h, b1, b2) ;
		graphic.stroke(red,green,blue) ;
		graphic.line(0,i, w,i) ;	
	}
	return graphic;
}

function curvyGradiant(w,h,r1,g1,b1,r2,g2,b2,r3,g3,b3) {
	let graphic = createGraphics(w, h) ;	
	for(let i = 0; i < h; i ++){
		let red = map(i, 0, h, r1, r2) ;
		let green = map(i, 0, h, g1, g2) ;
		let blue = map(i, 0, h, b1, b2) ;
		graphic.fill(red,green,blue) ;
		graphic.noStroke() ;
		graphic.ellipse(w/2,1.5*h,3.2*h-i,3.2*h-i) ;	
	}
	return graphic;
	
	
	

}