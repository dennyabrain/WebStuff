/*var player = new Tone.Player("audio/soooha.mp3").toMaster();
Tone.Buffer.on('load',function(){
	player.start();
})*/
var notes=["C2","G2","D3","B2","C2","G2","D3","B2","C2","G2","D3","B2","C2","G2","B2","B2"]
var index=0;
var vol = new Tone.Volume(-12);
var synth = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4"
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
}).connect(vol);
var synth2 = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4"
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
}).connect(vol);

var synth3 = new Tone.SimpleSynth({
	"portamento": 0,
    "oscillator": {
        "type": "square4"
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
}).connect(vol);

vol.toMaster();

//synth.oscillator.partials=[1, 0, 2, 2, 2, 5, 6, 7];
//synth.triggerAttack("C2");

var loop = new Tone.Loop(function(time){
	
	//var index=Math.floor(Math.random()*14);
	index=index%16;
	console.log(notes[index]);
	var release = Math.random()*4;
	synth.triggerAttackRelease(notes[index],release);
	synth2.triggerAttackRelease(notes[(index+3)%16],release+2);
	synth2.triggerAttackRelease(notes[(index+2)%16],release+1);
	index+=1;
},"1n").start();



Tone.Transport.bpm.value=60;
loop.humanize="16n";
Tone.Transport.start();