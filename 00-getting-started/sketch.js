/* http://p5js.org/reference/

There are two main functions you will use in your program.
The setup() block runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. The draw() block runs repeatedly, and is used for animation.*/

function setup() {

  //create canvas with custom size
  createCanvas(windowWidth, windowHeight);

  //background('#e3f2fd');

  //remove black outline
  //noStroke();

  //Center elemen//ts
  //translate(width/2, height/2);

  //create static element - http://p5js.org/reference/#p5/arc
  //arc(0, 0, 300, 300, 0, HALF_PI/4, PIE);
  arc(100, 100, 300, 300, 0, HALF_PI/4, PIE); //arc


}

function draw() {

}
