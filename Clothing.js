class Clothing {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.strokes = [];
  }

  paint(penSize) {
    if (startDrawing) {
      noStroke();
      if (mouseIsPressed) {
        this.addStrokes();
      }
    }
  }

  displayPaint() {
    for (const s of this.strokes) {
      fill(s.color);
      ellipse(s.x, s.y, s.size);
    }
  }

  addStrokes() {
    if (this.strokes.length == 0) {
      this.strokes.push({ x: mouseX, y: mouseY, size: penSize, color: currentColor });
      return;
    }
    if (pmouseX > 195 && pmouseX < 310 &&
      pmouseY > 160 && pmouseY < 395) {
      let prevStroke = createVector(pmouseX, pmouseY);
      let nextStroke = createVector(mouseX, mouseY);
      for (let i = 0; i < 10; i++) {
        let between = p5.Vector.lerp(prevStroke, nextStroke, i / 10);
        this.strokes.push({ x: between.x, y: between.y, size: penSize, color: currentColor });
      }
    }
  }

  clearStrokes() {
    clear();
    background(0, 0, 255);
    top1.isShowing = true;
    this.strokes = [];
  }

}

