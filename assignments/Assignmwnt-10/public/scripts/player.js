let playerX = 70;
let playerY = window.innerHeight - 200; //top of player

let playerHeight = 120;

player.style.height = playerHeight + "px";
player.style.top = playerY + "px";

let current_lane = 0;
let max_lane = 2;

window.addEventListener("keydown", function (e) {
  if (e.key === "d" && current_lane < max_lane) {
    playerX += 180;
    player.style.left = playerX + "px";
    current_lane++;
  } else if (e.key === "a" && current_lane > 0) {
    playerX -= 180;
    player.style.left = `${playerX}px`;
    current_lane--;
  }
});
