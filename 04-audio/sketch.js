var echonestAnalysis;
var cnv;
var audioEl;


var bgColor;

function setup() {
  //create canvas with custom size
  createCanvas(windowWidth, windowHeight);

  background('#14bdd7');

  //Center elemen//ts
  translate(width/2, height/2);

  //p5dom   //#/p5/createAudio
  audioEl = createAudio('firestone.mp3');

}

function draw() {

  if(mouseIsPressed)
    audioEl.play();
  else
    audioEl.stop();

}

function mouseMoved() {
  //ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
