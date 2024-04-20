// An incremental game, but you increment in Atari Breakout! You get 1 point for each brick you break. You can buy auto paddles, more blocks, etc
let player;
let ball;
let bricks = [];
let won = true;

function setup() {
  createCanvas(1445, 550);
  player = new PlayerPaddle();
  ball = new Ball();
  rePopulateBricks();

  createButton("Restore Ball. Cost: 2").addClass("button").id("restoreBallBtn").mouseClicked(restoreBall);
  createButton("Increase your paddle's width. Cost: 5").addClass("button").id("increasePaddleBtn").mouseClicked(increasePaddleWidth);
  createButton("Increase money per hit. Cost: 10").addClass("button").id("increaseMoneyPerHitBtn").mouseClicked(increaseMoneyPerHit);
  createButton("STOP the ball from stopping when it hits the bottom. Cost: 100").addClass("button").id("stopKillingBallButton").mouseClicked(dontKillBall);
  createButton("Increase the speed cap of the ball. Cost: 100").addClass("button").id("increaseBallSpeedCapButton").mouseClicked(increaseBallSpeedCap);
  createButton("Increase ball acceleration. Cost: 100").addClass("button").id("increaseBallAccelerationButton").mouseClicked(increaseBallAcceleration);
  createButton("Buy another paddle, controled by Level 1 AI. Cost: 10").addClass("button").id("buyPaddleBtn").mouseClicked(buyLevelOnePaddle);

  createP("Money: 0").id("moneyText").addClass("text");
  document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;

}

function rePopulateBricks() {
  bricks = []; // Reset the bricks array
  for(let i = 0; i < 4; i++){
    bricks.push([]);
    for(let j = 0; j < 19; j++){
      rect(j*70 + 10, i*60 + 10, 66, 50);
      bricks[i].push(new Brick(j*73 + 7, i*45 + 10));
    }
  }
}

function recreateBall() {
  ball = new Ball();
}

function restartGame() {
  rePopulateBricks();
  recreateBall();
}

function draw() {
  background(220);
  if(!won){ // basically, at the start, or after winning
    render();
    update();
  }else{
    textSize(32);
    text("Press Space to restart", width/2 - 150, height/2);
  }
  console.log(won);

}

function keyPressed() {
  if (key === ' '){
    won = false;
  }
}

function render() {
  drawBricks();
  player.draw();
  ball.draw();
}

function drawBricks() {
  // Create the grid of bricks
  let colorsOfRows = [color(255, 0, 0), color(255, 255, 0), color(0, 255, 0), color(0, 0, 255)];
  for(let i = 0; i < bricks.length; i++){
    console.log(bricks.length)
    fill(colorsOfRows[i]);
    for(let j = 0; j < bricks[i].length; j++){
      bricks[i][j].draw();
    }
  }
}

function update() {
  player.update();
  ball.update();
  won = isPlayerWon()
  if(won) {
    alert("You won!");
    restartGame();
  }
}

function isPlayerWon() {
  for (let row of bricks){
    for(let brick of row){
      if(!brick.broken) return false;
    }
  }
  return true;
}
