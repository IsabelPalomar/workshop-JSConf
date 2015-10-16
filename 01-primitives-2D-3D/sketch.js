/* http://p5js.org/reference/

There are two main functions you will use in your program.
The setup() block runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. The draw() block runs repeatedly, and is used for animation.*/

function setup() {

  //create canvas with custom size
  //createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight, WEBGL);

  //remove black outline
  //noStroke();

  //2D OBJECTS
  /*arc(100, 100, 300, 300, 0, HALF_PI/4, PIE); //arc
  ellipse(360, 140, 100, 100);
  line(460, 140, 700, 180);*/

}

function draw() {
  background('#e3f2fd');

  //3D OBJECTS
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);

  box(100, 100, 100);
  //cylinder(200, 200);
  //cone(200, 200);


}
