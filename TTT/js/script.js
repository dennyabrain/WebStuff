var cnv;
var taleWidth=700;

function setup(){
	cnv=createCanvas(800, 600);
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

  	textArea = createElement('textarea','your tatti tale');
  	//textArea.position(20,650);
  	textArea.style('width','500px');
  	textArea.style('height','80px');
  	textArea.style('background-color','#2E4057');
  	textArea.style('color','#CCF5AC');
  	textArea.style('border','none');
  	textArea.style('font-size','1.2em');
  	textAreaName = createElement('textArea','your name');
  	//textAreaName.position(20,750);
  	textAreaName.style('width','300');
  	textAreaName.style('height','25px');
  	textAreaName.style('width','500px');
  	textAreaName.style('height','20px');
  	textAreaName.style('background-color','#2E4057');
  	textAreaName.style('color','#CCF5AC');
  	textAreaName.style('border','none');
  	textAreaName.style('font-size','1.2em');
  	button = createButton('Generate Image');
  	//button.position(540, 650);
  	button.mousePressed(greet);
  	button.class('myButton');
  	textAlign(LEFT);
  	button2 = createButton('Download Image');
  	//button2.position(540, 700);
  	button2.class('myButton');
  	button2.mousePressed(saveImg);
  	fill(255);
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

	/*if(test[0][5].indexOf('\n')!=-1){
		console.log('contains newline');
	}*/

	var blockWidth=50;
	offset=(360-numOfLines*40)/2;
	var yIndex=130+offset;
	var chars=0;
	//console.log(test);
	for(i=0;i<test.length;i++){	
		//console.log("hi");
		if(test[i].indexOf('\n')==-1){
			chars+=test[i].length;
			//console.log('length of text is : '+chars);
		}else{
			chars+=test[i].indexOf('\n')-2;
			//console.log('length of newline text is : '+chars);
		}
		
		if(chars<30){
			var tempText //to save a token with \n after split
			//console.log("hi2");
			//check if it has newline
			if(test[i].indexOf('\n')!=-1){
				console.log('text i is : '+test[i]);
				console.log('contains newline');
				tempText=test[i].split('\n');
				console.log('broken text is : '+tempText);
				text(tempText[0],blockWidth,yIndex);
				blockWidth=50;
				yIndex+=40;
				chars=0;
				text(tempText[1],blockWidth,yIndex);
				blockWidth+=textWidth(tempText[1]+' ');
				continue;
			}
			text(test[i],blockWidth,yIndex);
			blockWidth+=textWidth(test[i]+' ');
		}else{
			if(test[i].indexOf('\n')!=-1){
				console.log('text i is : '+test[i]);
				console.log('contains newline');
				tempText=test[i].split('\n');
				console.log('broken text is : '+tempText);
				text(tempText[0],blockWidth,yIndex);
				blockWidth=50;
				yIndex+=40;
				chars=0;
				text(tempText[1],blockWidth,yIndex);
				blockWidth+=textWidth(tempText[1]+' ');
				continue;
			}
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
	//console.log('tokens : '+token);
	
	for(i=0;i<token.length;i++){
		if(lineWidth+textWidth(token[i]+' ')<taleWidth){
			fill(255,0,0);
			//ellipse(50+lineWidth,130+numOfLines*40,10,10);
			lineWidth+=textWidth(token[i]+' ');
			//console.log('token number i : '+token[i]);
			if(token[i].indexOf('\n')!=-1){
				//console.log('contains newline');
				numOfLines+=1;
			}
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