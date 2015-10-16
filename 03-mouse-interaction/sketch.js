/*

There are two main functions you will use in your program.
The setup() block runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. The draw() block runs repeatedly, and is used for animation.*/

var cnv;
function setup() {
  //create canvas
  cnv = createCanvas(windowWidth, windowHeight);
}

function draw() {

  if (mouseIsPressed)
    fill(0);
  else
    fill(255);

    arc(mouseX, mouseY, 100, 100, 0, HALF_PI/4, PIE); //arc
    console.log(mouseX);
    console.log(mouseY);
}
