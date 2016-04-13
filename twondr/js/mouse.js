function Mouse(){
	this.defaultX=0.1*displayWidth;
	this.defaultY=0.05*displayHeight;
	this.x=0;
	this.y=0;
	this.onClickX=0;
	this.onClickY=0;

	this.setCoordinatesOnClick=function(x,y){
		this.onClickX=x;
		this.onClickY=y;
	}
}