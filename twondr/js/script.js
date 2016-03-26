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
	prf.draw();
}

function mouseClicked(){
	myMouse.setCoordinatesOnClick(mouseX,mouseY);
}

function mouseDragged(){
	if(prf.isClicked()){
		console.log('prf is being dragged');
	}
}

function mouseReleased(){
	mouseDrag=false;
}