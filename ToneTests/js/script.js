var feedback = 0.2;
//var bgColor = ["aqua","yellow","black","red","blue","green"];
var bgColor = ["#C53638","#F2E8D4","#2F2718","#55442D","#C72A25"];

$(document).ready(function(){
	//console.log($(document).width());
	//console.log($(document).height());
	$("#content").width($(document).width());
	$("#content").height($(document).height());
});

nx.onload=function(){
	dial1.on("*",function(data){
		//console.log(data);
	});

	dial2.on("*",function(data){
		feedback=data;
		pingpong.feedback.value=data.value;
		//console.log(data);
	});
};

var notes=["C2","G2","D3","B2","C2","G2","D3","B2","C2","G2","D3","B2","C2","G2","B2","B2"]
var index=0;
var vol = new Tone.Volume(-24);
var synth = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4",
        "partials":[3,0,2,0,0.2]
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
});
var synth2 = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4",
   		"partials":[4,0,2,0,0.2]
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
});

var synth3 = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4",
    	"partials":[2,0,2,0,0.2]
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
});

var loop = new Tone.Loop(function(time){
	//var index=Math.floor(Math.random()*14);
	index=index%16;
	//console.log(notes[index]);
	//var release = Math.random()*4;
	var release = dial1.val.value;
	synth.triggerAttackRelease(notes[index],release);
	synth2.triggerAttackRelease(notes[(index+3)%16],release+2);
	synth3.triggerAttackRelease(notes[(index+2)%16],release+1);
	index+=1;
	console.log(Math.floor(Math.random()*6));
	$("#content").css({
		"background-color":bgColor[Math.floor(Math.random()*6)]
	});
},"1n").start();

var pingpong = new Tone.PingPongDelay("4n",feedback);

synth.chain(pingpong,vol,Tone.Master);
synth2.chain(pingpong,vol,Tone.Master);
synth3.chain(pingpong,vol,Tone.Master);

Tone.Transport.bpm.value=60;
loop.humanize="16n";
Tone.Transport.start();