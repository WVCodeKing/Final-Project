class Top extends Clothing {

    constructor(x, y) {
      super(x, y);
      this.isShowing = false;
    }
  
    display() {
      if (this.isShowing) {
        image(shirtImg, this.x, this.y, 300, 300);
        this.isShowing = false;
      }
    }
  
    paintTop() {
      fill(currentColor)
      if (mouseX > 195 && mouseX < 310 &&
        mouseY > 160 && mouseY < 395) {
        super.paint(penSize);
      }
    }
  
  }
  