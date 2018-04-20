class boxed {
    constructor(x, y, boxSize,boxColor) {
        this.x = x - boxSize/2;
        this.y = y - boxSize/2;
        this.boxSize = boxSize;
        this.boxColor = boxColor; // color(255,204,0);
    }
    show() {
            fill(this.boxColor);
            rect(this.x, this.y, this.boxSize,this.boxSize);
    }
}