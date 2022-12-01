let top2 = new Top(20, 100);
let shirtImg;
// let tShirtButton;

function preload() {
  shirtImg = loadImage("assets/Tshirt.png");

}


function setup() {
    createCanvas(400, 400);

    // tShirtButton = createButton('click me');
    // tShirtButton.id("shirtButton");
    // tShirtButton.position(100, 0);
    // tShirtButton.mousePressed(tShirtClicked);
  }
  
  function draw() {
    background(0,0,255);
    top2.display();
  }
  // github

  // function tShirtClicked() {
  //   console.log("CLICKED")
  // }