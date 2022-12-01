class Clothing {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        checkClicked();
      }


      checkClicked(){
        if(mouseX > 20 &
           mouseX < 95 &
           mouseY > 100 &
           mouseY < 175 &
           mouseIsPressed){
            print('helo', 120, 200);
           }
      }
}
// github