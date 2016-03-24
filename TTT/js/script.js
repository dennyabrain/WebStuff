var cnv;
var taleWidth=700;

function setup(){
	cnv=createCanvas(800, 800);
	background(0);
	textSize(28);
	textFont('Calibri');
	fill(255,255,255);
	text("-ded-",50,50);
	text("ttatti.com",600,50);
	text("#tatti",50,550);
	text("terribly tatti tales",270,550);

	//input = createInput();
  	//input.position(20, 650);

  	button = createButton('Generate Image');
  	button.position(540, 650);
  	button.mousePressed(greet);
  	textAlign(LEFT);
  	button2 = createButton('Download Image');
  	button2.position(540, 685);
  	button2.mousePressed(saveImg);
  	fill(255);

  	textArea = createElement('textarea','your tatti tale');
  	textArea.position(20,650);
  	textArea.style('width','500px');
  	textArea.style('height','50px');
  	textAreaName = createElement('textArea','your name');
  	textAreaName.position(20,730);
  	textAreaName.style('width','300');
  	textAreaName.style('height','25px');

}

function draw(){
	//ellipse(50, 50, 80, 80);
}

function greet(){
	tale=textArea.value();
	//console.log(tale);
	numOfLines=calcNumOfLines(tale);
	if(numOfLines>10){
		alert('Story too large to fit the template');
		return;
	}
	fill(255,255,255);
	//text(input.value(),50,100);
	//text(input.value(),50,100);
	textSize(40);

	var test=tale.split(' ');
	var blockWidth=50;
	offset=(360-numOfLines*40)/2;
	var yIndex=130+offset;
	var chars=0;
	console.log(test);
	for(i=0;i<test.length;i++){	
		//console.log("hi");
		chars+=test[i].length;
		if(chars<25){
			//console.log("hi2");
			text(test[i],blockWidth,yIndex);
			blockWidth+=textWidth(test[i]+' ');
		}else{
			chars=0;
			yIndex+=40;
			blockWidth=50;
			text(test[i],blockWidth,yIndex);
			blockWidth+=textWidth(test[i]+' ');
		}
	}
	textSize(28);
	var userName=textAreaName.value();
	text('by '+userName,750-textWidth('by '+userName),550);
}

function saveImg(){
	save(cnv,'ttt.jpg');
	//console.log("test");
}

function calcNumOfLines(text){
	textSize(40);
	var numOfLines=0;
	var lineWidth=0;
	/*var lines=text.split("\n");
	var token=[];
	for(i=0;i<lines.length;i++){
		token.push(lines[i].split(' '));
	}*/

	//console.log(token);
	var token=text.split(' ');
	for(i=0;i<=token.length;i++){
		if(lineWidth+textWidth(token[i]+' ')<taleWidth){
			fill(255,0,0);
			//ellipse(50+lineWidth,130+numOfLines*40,10,10);
			lineWidth+=textWidth(token[i]+' ');
		}else{
			numOfLines+=1;
			//console.log("word before enter: "+token[i]);
			//console.log("present numCount : "+numOfLines);
			lineWidth=0;
			lineWidth+=textWidth(token[i]+' ');
		}
	}
	return numOfLines+1;
}