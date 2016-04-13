var cnv,prf;
var myMouse;

function setup(){
	myMouse=new Mouse();
	cnv=createCanvas(displayWidth,displayHeight);
	background(0);
	prf = new Profile(0,0.1*displayWidth,0.05*displayHeight);
}

function draw(){
	background(0);
	if(!prf.isHome()){
		console.log('not Home yet');
		prf.goHome();
		prf.draw();
	}else{
		prf.draw();
	}
}

function mousePressed(){
	myMouse.setCoordinatesOnClick(mouseX,mouseY);
	//console.log('coordinates are :');
	//console.log(myMouse);
}

function mouseDragged(){
	if(myMouse.onClickX==0 && myMouse.onClickY==0){
		myMouse.setCoordinatesOnClick(mouseX,mouseY);
	}	
	if(prf.isClicked()){
		console.log(mouseY-myMouse.onClickY);
		prf.x=0.1*displayWidth+(mouseX-myMouse.onClickX);
		prf.y=0.05*displayHeight+(mouseY-myMouse.onClickY);
	}
}

function mouseReleased(){
	//set mousepressedCoord as 0,0 by default
	myMouse.setCoordinatesOnClick(0,0);
}

