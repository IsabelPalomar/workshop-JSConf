/* http://p5js.org/reference/

There are two main functions you will use in your program.
The setup() block runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. The draw() block runs repeatedly, and is used for animation.*/

//var img;

/*function preload(){
  img = loadImage('cat.jpg');
}*/

function setup() {

  //create canvas with custom size
  createCanvas(windowWidth, windowHeight);

  //set background color
  background('#e3f2fd');

  //remove black outline
  //noStroke();

  //Center elements
  //translate(width/2, height/2)

  //Arc
  //arc(0, 0, 300, 300, 0, HALF_PI/4, PIE); //arc
  loadImage('cat.jpg', drawCat);
  //image(img, 10, 10);

}

function draw() {

}

function drawCat(img){
    image(img, 10, 10);
}
