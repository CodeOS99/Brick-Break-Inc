function restoreBall() {
    if (money > restoreBallCost && !ball.alive) {
        money -= 2;
        ball = new Ball();
        document.getElementById("moneyText").innerHTML = `You have $<span id="green">${money}</span>`;
    }
}
