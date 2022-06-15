function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let opponents = [];
let opponentIntervalID;
let left_position = [70, 250, 430];

function spawnOpponents() {
  opponentIntervalID = setInterval(() => {
    const opp = new Opponent(
      left_position[getRandomInt(0, left_position.length)],
      -100
    );
    opponents.push(opp);
  }, 4000);
}

function play() {
  animationId = window.requestAnimationFrame(play);
  opponents = opponents.filter((op) => {
    if (op.y >= window.innerHeight) {
      score++;
      scorenumber.innerHTML = `${score}`;
      return false;
    } else {
      return true;
    }
  });
  opponents.forEach((opponent) => {
    opponent.update();
  });
  collisionDetection();
}

function collisionDetection() {
  opponents.forEach((opponent) => {
    if (
      opponent.x === playerX &&
      opponent.y + opponent.height > playerY &&
      playerY + playerHeight > opponent.y
    ) {
      window.cancelAnimationFrame(animationId);
      game.classList.add("animation__stop");
      result__card.classList.remove("hide");
      resultScore.innerHTML = `${score}`;

      clearInterval(opponentIntervalID);
    }
  });
}
