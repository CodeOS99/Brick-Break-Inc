class Ball{
    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.r = 20;
        this.xVel = random(-5, 5);
        this.yVel = 5;
        this.speed = 1;
        this.alive = true;
    }

    draw() {
        fill(190);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2);
    }

    update() {
        if(this.alive) {
            this.x += this.xVel*this.speed;
            this.y += this.yVel*this.speed;

            if(this.y < 0 || this.y > height-this.r) {
                if(this.y > height-this.r) {
                    if(killBall){
                        this.alive = false;
                    }
                    this.y = height-this.r;
                }else{
                    this.y = 0;
                }
                this.yVel *= -ballAcceleration;
            }
            
            // If it touched the left or right boundaries
            if(this.x < 0 || this.x > width-this.r) {
                this.xVel *= -ballAcceleration;
                if(this.x < 0) {
                    this.x = 0;
                }else{
                    this.x = width-this.r;
                }
            }

            if (this.isCollidingWithPlayer()) {
                let playerMiddle = player.x + player.w / 2;

                let amplitude = playerMiddle - this.x;
                this.xVel = -amplitude/20;

                this.xVel = constrain(this.xVel, -5, 5);
                this.yVel *= -1;
                this.y -= 10;
            }
            

            //Detect collision with bricks
            if(this.isCollidingWithBricks()) {
                this.yVel *= -1;
            }

            this.speed += 0.001;
            this.xVel = min(this.xVel, ballMaxSpeedCap);
            this.yVel = min(this.yVel, ballMaxSpeedCap);
        }
    }

    isCollidingWithPlayer() {
        return collideRectCircle(player.x, player.y, player.w, player.h, this.x, this.y, this.r*2);
    }

    isCollidingWithBricks() {
        let brokeBrick = false;
        for(let i = 0; i < bricks.length; i++){
            for(let j = 0; j < bricks[i].length; j++){
                let brick = bricks[i][j];
                if(collideRectCircle(brick.x, brick.y, brick.width, brick.height, this.x, this.y, this.r*2) && !brick.broken) {
                    // Collision detected!
                    money += moneyPerHit;
                    brick.broken = true;
                    brokeBrick = true;

                    // Uh oh! Vanilla JS!
                    document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
                }
            }
        }
        return brokeBrick;
    }
}