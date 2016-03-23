var cnv;

function setup(){
	cnv=createCanvas(800, 700);
	background(0);
	textSize(32);
	fill(255,255,255);
	text("-ded-",50,50);
	text("ttatti.com",600,50);
	text("#tatti",50,550);
	text("terribly tatti tales",270,550);

	input = createInput();
  	input.position(20, 650);

  	button = createButton('Enter Text');
  	button.position(150, 650);
  	button.mousePressed(greet);
  	textAlign(LEFT);
  	button2 = createButton('Save Image');
  	button2.position(500, 650);
  	button2.mousePressed(saveImg);

}

function draw(){
	//ellipse(50, 50, 80, 80);
}

function greet(){
	name=input.value();
	console.log(name);
	fill(255,255,255);
	//text(input.value(),50,100);
	//text(input.value(),50,100);
	textSize(28);

	console.log(textWidth(name));
	
	
	var test=name.split(" ");
	console.log(test);
	var blockWidth=50;
	var yIndex=200
	for(i=0;i<test.length;i++){	
		blockWidth+=textWidth(test[i]+' ');
		if(blockWidth<600){
			text(test[i],blockWidth,yIndex);
		}else{
			blockWidth=0;
			yIndex+=40;
		}
	}
}

function saveImg(){
	save(cnv,'ttt.jpg');
	//console.log("test");
}