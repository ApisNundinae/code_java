function setup() {
 createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	

 background(15,9,47) ;
 	stroke(255,255,255) ;
	//robo_Moulinex_Shiny_3000_Du_Turfu_pneumonoultramicroscopicsilicovolcanoconiosis(100, 200, 100, 25) ;
	//robo_Moulinex_Shiny_3000_Du_Turfu_pneumonoultramicroscopicsilicovolcanoconiosis(200, 200, 100, 25) ;
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