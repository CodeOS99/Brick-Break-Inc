class basePaddle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        fill(this.color);
        rectMode(CORNER)
        rect(this.x, this.y, this.width, this.height);
    }
}
