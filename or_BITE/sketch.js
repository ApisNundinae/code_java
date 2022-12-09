function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight) ; 
}



function draw() {
  // put drawing code here
	
	push();
	background(27,28,46) ;
	stroke(255,255,255) ;
		let counter = 0 ;
	while(counter < 50){
		robo_Moulinex_Shiny_3000_Du_Turfu_pneumonoultramicroscopicsilicovolcanoconiosis(
			noise(1,2 + counter, counter) * width , 
			noise(2,1 + counter, counter) * height , noise(1)*5, noise(2)*5) ;
		counter ++ ;
	}




	translate(width / 2, height / 2) ;
	rotate( millis() / 1000);
	rectMode(CENTER) ;
	fill(105,32,43) ;
	rect(500,550,100,100,100) ;
	rotate( millis() / -5000);	
	fill(237,128,69) ;
	rect(1000,1000,180,180,1000) ;
	fill(96,37,68) ;	
    arc(1000,1000,180,180, PI / 2, 3 * PI / 2, CHORD);
	

	//this would be a cool changing background but unfortunately it's really laggy and the sun doesn't really work with it but here it is in case I have to activate it again :)

	
	//fill(117,121,235) ;
	//rect(0,0,5000,5000,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,4900,4900,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,4800,4800,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,4700,4700,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,4600,4600,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,4500,4500,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,4400,4400,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,4300,4300,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,4200,4200,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,4100,4100,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,4000,4000,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,3900,3900,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,3800,3800,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,3700,3700,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,3600,3600,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,3500,3500,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,3400,3400,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,3300,3300,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,3200,3200,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,3100,3100,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,3000,3000,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,2900,2900,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,2800,2800,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,2700,2700,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,2600,2600,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,2500,2500,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,2400,2400,100) ;		
	//fill(27,28,46) ;
	//rect(0,0,2300,2300,100) ;		
	//fill(117,121,235) ;
	//rect(0,0,2200,2200,100) ;	
	//fill(27,28,46) ;
	//rect(0,0,2100,2100,50) ;
	//fill(117,121,235) ;
	//rect(0,0,2000,2000,25) ;	
	//fill(27,28,46) ;
	//rect(0,0,1900,1900,25) ;
	//fill(117,121,235) ;
	//rect(0,0,1800,1800,25) ;	
	//fill(27,28,46) ;
	//rect(0,0,1700,1700,25) ;
	//fill(117,121,235) ;
	//rect(0,0,1600,1600,25) ;	
	//fill(27,28,46) ;
	//rect(0,0,1500,1500,25) ;
	//fill(117,121,235) ;
	//rect(0,0,1400,1400,25) ;
	//fill(27,28,46) ;
	//rect(0,0,1300,1300,25) ;
	//fill(117,121,235) ;
	//rect(0,0,1200,1200,25) ;
	//fill(27,28,46) ;
	//rect(0,0,1100,1100,25) ;
	//fill(117,121,235) ;
	//rect(0,0,1000,1000,25) ;
	//fill(27,28,46) ;
	//fill(27,28,46) ;
	//rect(0,0,900,900,25) ;
	//fill(117,121,235) ;
	//rect(0,0,800,800,25) ;
	//fill(27,28,46) ;
	//rect(0,0,700,700,25) ;
	//fill(117,121,235) ;
	//rect(0,0,600,600,25) ;	
	//fill(27,28,46) ;
	//rect(0,0,500,500,25) ;
	//fill(117,121,235) ;
	//rect(0,0,400,400,25) ;	
	//fill(27,28,46) ;
	//rect(0,0,300,300,25) ;
	
	
	pop();
	noStroke() ;
	translate(width/2, height/2) ;
	rectMode(CENTER) ;
	rotate( millis() / -1000);
	fill(250,194,52) ;	
	rect(0,0,400,400,1000)
	fill(110,26,62) ;
	rect(300,0,100,100,75) ;
	rotate( millis() / -2000);
	fill(66,3,38) ;	
	rect(50,600,150,150,75);
	rotate( millis() / -2000);
	fill(176,39,78) ;
	rect(500,800,135,135,75);
	
	 	stroke(0,0,0) ;
	
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