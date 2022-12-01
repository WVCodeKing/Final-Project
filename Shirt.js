class Shirt extends Clothing {
    constructor(x, y) {
        super(x, y);
      }

    display(){
        if(this.x < 25 & this.x < 35){
            // nostroke()
            // comment
            // comment
            // rect(this.x, this.y, 100,)
            image(shirtImg, this.x, this.y, 100, 100);
        }  
    }
}
// want to use a rectangle, but nofill in certain areas so that a shirt is curved out of the rectangle