const box = document.createElement("div");

box.style.width = "1000px";
box.style.height = "1000px";
box.style.border = "1px solid black";
box.style.position = "relative";
box.style.margin = "auto";
box.style.marginTop = "500px";

document.body.appendChild(box);

const ball = document.createElement("div");
ball.style.width = "200px";
ball.style.height = "200px";
ball.style.position = "absolute";
ball.style.borderRadius = "50%";
ball.style.backgroundColor = "red";
ball.style.bottom = 0;
ball.style.left = "50%";
ball.style.transform = "translateX(-50%)";
box.appendChild(ball);

let move = 5;
let position = 0;

setInterval(function () {
  position += move;
  if (position > 1000 - 200 || position < 0) {
    move = move * -1;
    ball.style.bottom = position + "px";
  }
  ball.style.bottom = position + "px";
}, 1);

// let velocity = 20;
// let pos = 0;

// setInterval(() => {
//   pos += velocity;
//   console.log(pos);
//   if (pos >= 1000 - 200) {
//     velocity *= -1;
//   } else if (pos < 0) {
//     velocity *= -1;
//   }
//   ball.style.bottom = pos + "px";
// }, 1000 / 60);
