class PlayerPaddle{
    constructor() {
        this.x = width / 2;
        this.y = 500;

        this.w = 200;
        this.h = 20;
    }

    draw() {
        fill(255);
        rectMode(CORNER)
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.x = min(mouseX, width - this.w);
    }
}