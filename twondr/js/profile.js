function Profile(state,x,y){
	this.state=state;
	this.x=x;
	this.y=y;
	this.width=0.8*displayWidth;
	this.height=0.7*displayHeight;

	this.drag=function(){

	}

	this.state=function(){
		return this.state
	}

	this.draw=function(){
		fill(255,0,0);
		
		rect(this.x,this.y,this.width,this.height);
	}

	this.isClicked=function(){
		if(mouseX>this.x && mouseX<this.x+this.width && mouseY>this.y && mouseY<this.y+this.width){
			console.log(myMouse);
			return true;
		}else{
			return false;
		}
	}

	this.isDragged=function(){
		if(mouseDrag==true && mouseX>this.x && mouseX<this.x+this.width && mouseY>this.y && mouseY<this.y+this.width){
			return true;
		}else{
			return false;
		}	
	}
}