class ball {
    constructor(x, y, ballRadius, ballColor) {
        this.x = x;
        this.y = y;
        this.radiusX = this.radiusY = ballRadius;
        this.scl = 5;
        this.xspeed = 0;
        this.yspeed = 0;
        this.ballColor = ballColor;
    }
    ballRadius() {return floor(this.radiusX);}
    setRadius(radiusvalue) {this.radiusX = this.radiusY = radiusvalue;}
    move(xspeed, yspeed) {
            this.xspeed = xspeed;
            this.yspeed = yspeed;
            if(xspeed > 0) this.inflate(0.01); else this.deflate(0.01);
            this.updatePosition();
    }
    updatePosition() {
            this.x += this.xspeed * this.scl;
            this.y += this.yspeed * this.scl;
    }
    show() {
            fill(this.ballColor);
            ellipse(this.x, this.y, this.radiusX, this.radiusY);
    }
    growBall(growthFactor) {
        this.radiusX += growthFactor * this.radiusX
        this.radiusY += growthFactor  * this.radiusY;
    }
    inflate(growthFactor) {
        this.radiusX += growthFactor * this.radiusX
        this.radiusY += growthFactor  * this.radiusY;
        
    }
    deflate(growthFactor) {
        this.radiusX -= growthFactor * this.radiusX
        this.radiusY -= growthFactor  * this.radiusY;
        
    }
}

