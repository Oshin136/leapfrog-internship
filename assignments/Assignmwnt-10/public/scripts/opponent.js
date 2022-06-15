class Opponent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 120;
    this.opponent_wrapper = document.createElement("div");
    this.opponent = document.createElement("img");
    this.opponent.setAttribute("src", "./assets/opponent.png");
    this.opponent_wrapper.classList.add("opponent");
    this.opponent_wrapper.style.height = this.height + "px";
    this.opponent_wrapper.appendChild(this.opponent);
    game.appendChild(this.opponent_wrapper);
  }

  create() {
    this.opponent_wrapper.style.left = this.x + "px";
    this.opponent_wrapper.style.top = this.y + "px";
  }

  update() {
    this.y += 3;
    this.create();
  }
}
