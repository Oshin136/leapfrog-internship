let animationId;
let score = 0;

start.addEventListener("click", () => {
  start__card.classList.add("hide");
  game.classList.remove("animation__stop");
  play();
  spawnOpponents();
});

replay.addEventListener("click", () => {
  result__card.classList.add("hide");
  clearInterval(opponentIntervalID);

  opponents.forEach((opponent) => {
    opponent.opponent_wrapper.remove();
  });
  opponents = [];
  score = 0;

  game.classList.remove("animation__stop");
  play();

  spawnOpponents();
});
