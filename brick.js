class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 40;
        this.broken = false;
    }
    
    draw() {
        if(this.broken) return;
        rect(this.x, this.y, this.width, this.height);
    }
}
