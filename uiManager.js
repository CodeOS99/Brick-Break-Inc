function restoreBall() {
    if (money > restoreBallCost && !ball.alive) {
        money -= 2;
        ball = new Ball();
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
    }
}

function increasePaddleWidth() {
    if (money > increasePaddleWidthCost && player.w < 400) {
        money -= increasePaddleWidthCost;
        player.w += 10;
        increasePaddleWidthCost = Math.floor(increasePaddleWidthCost * 1.2);
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
        document.getElementById("increasePaddleBtn").innerHTML = `Increase your paddle's width. Cost: ${increasePaddleWidthCost}`;
    }else if(player.w >= 400){
        document.getElementById("increasePaddleBtn").innerHTML = `Your paddle is at MAX width`;
    }
}

function increaseMoneyPerHit() {
    if(money > increaseMoneyPerHitCost) {
        money -= increaseMoneyPerHitCost;
        moneyPerHit += 1;
        increaseMoneyPerHitCost = Math.floor(increaseMoneyPerHitCost * 1.3);
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
        document.getElementById("increaseMoneyPerHitBtn").innerHTML = `Increase money per hit. Cost: ${increaseMoneyPerHitCost}`;
    }
}

function dontKillBall() {
    if(killBall && money > 100) {
        money -= 100;
        killBall = false;
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
        document.getElementById("stopKillingBallButton").innerHTML = 'The ball now DOES NOT die when it hits the bottom.';
    }
}

function increaseBallSpeedCap() {
    if(money > increaseBallSpeedCapCost) {
        money -= increaseBallSpeedCapCost;
        ballMaxSpeedCap += 1;
        increaseBallSpeedCapCost = Math.floor(increaseBallSpeedCapCost * 1.5);
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
        document.getElementById("increaseBallSpeedCapButton").innerHTML = `Increase the speed cap of the ball. Cost: ${increaseBallSpeedCapCost}`;
    }
}

function increaseBallAcceleration() {
    if(money > increaseBallAccelerationCost) {
        money -= increaseBallAccelerationCost;
        ballAcceleration += 0.1;
        increaseBallAccelerationCost = Math.floor(increaseBallAccelerationCost * 1.5);
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
        document.getElementById("increaseBallAccelerationButton").innerHTML = `Increase ball acceleration. Cost: ${increaseBallAccelerationCost}`;
    }
}

function buyLevelOnePaddle() {

}
