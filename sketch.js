var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2= loadImage("treasure.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1530,720);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("white");
  text("Score: " + score, 750, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    stroke("BLACK")
    fill("white")
    textSize(80);
    text("TREASURE UNLOCKED",450, 360);
  }


  drawSprites()
}