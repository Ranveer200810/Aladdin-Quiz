var bg,bg2,form,system,code,security;
var score=0;
var rightImg, right, wrongImg, wrong, wrongSound, rightSound;

function preload() {
 
  bg= loadImage("aladdin_cave.jpg");
  //load image for the treasure background
  bg2 = loadImage("aladdin_cave2.jpg");

  rightImg = loadImage("Right.png");
  wrongImg = loadImage("Wrong.png");
  rightSound = loadSound("rightSound.mp3");
  wrongSound = loadSound("wrongSound.mp3");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  // console.info(mouseX, mouseY);

  // add code for changing the background to the treasure background
  if (score === 3) {
    right.destroy();
    background(bg2);
  }else {
    background(bg);
  }

  clues();
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",290, 200);
  }

  drawSprites()
}