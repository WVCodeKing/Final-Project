let cnv;
let shirtImg;
let top1;
let pantsImg;
let button;
let isShirtShowing = false;
let nextClicked = false;
let currentColor = 'black';
let penSize = 20;
let startDrawing = false;

function preload() {
  shirtImg = loadImage("assets/Tshirt.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
  button = createButton("START");
  button.position(175, 225);
  button.id("myButton");
  button.mousePressed(buttonClicked);
  top1 = new Top(100, 120);
  clothing = new Clothing();
}

function draw() {
  if (isShirtShowing == true) {
    top1.display();
    top1.displayPaint();
    top1.paintTop();
    fill(255);
    textSize(10);
    text('STROKE SIZE: ' + penSize, 7, 136); 
    textSize(20);
    text('PRESS S TO SAVE', 168, 467);
  }
}

function keyPressed() {
  if (key == 's') {
    fill(0, 0, 255);
    rect(7, 125, 100, 15);
    rect(168, 430, 200, 50);
    save(cnv, 'myCanvas.jpg');
  }
}

function buttonClicked() {
  button.style('display', 'none');
  document.getElementById('buttonBar').style.display = "block";
  isShirtShowing = true;
  top1.isShowing = true;
  setTimeout(function() { startDrawing = true; }, 500);
  return;
}

function changeColor(col) {
  console.log("CLICKED", col);
  currentColor = col;
}

function addStrokeSize() {
  clear();
  background(0, 0, 255);
  top1.isShowing = true;
  if (penSize < 40) {
    penSize += 2;
    console.log(penSize);
    fill(255);
    textSize(10);
    text('STROKE SIZE: ' + penSize, 7, 136); 
  }
}

function minusStrokeSize() {
  clear();
  background(0, 0, 255);
  top1.isShowing = true;
  if (penSize > 6) {
    penSize -= 2;
    console.log(penSize);
    fill(255);
    textSize(10);
    text('STROKE SIZE: ' + penSize, 7, 136);  
  }
}
