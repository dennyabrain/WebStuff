function Profile(state,x,y){
	this.defaultX=0.1*displayWidth;
	this.defaultY=0.05*displayHeight;
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

	this.isHome=function(){
		if(this.x!==this.defaultX || this.y!==this.defaultY){
			return false;
		}else{
			return true;
		}
	}

	this.goHome=function(){
		if(Math.floor(this.x)<=this.defaultX){
			Math.floor(this.x+=10);
		}else{
			Math.floor(this.x-=10);
		}
		
		if(Math.floor(this.y)<=this.defaultY){
			Math.floor(this.y+=10);
		}else{
			Math.floor(this.y-=10);
		}
	}
}