let boxWidth = window.innerWidth;
let boxHeight = window.innerHeight;
const ballColors = [
  "red",
  "green",
  "blue",
  "black",
  "purple",
  "cyan",
  "orange",
  "yellow",
];
const balls = [];

window.addEventListener("resize", () => {
  boxWidth = window.innerWidth;
  boxHeight = window.innerHeight;
  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";
  box.style.border = "1px solid black";
  balls.forEach((ball) => {
    if (ball.x + ball.width > boxWidth) {
      ball.x = boxWidth - ball.width;
    }
    if (ball.y + ball.height > boxHeight) {
      ball.y = boxHeight - ball.height;
    }
  });
});

const box = document.createElement("div");
box.style.width = boxWidth + "px";
box.style.height = boxHeight + "px";
box.style.border = "1px solid black";
box.style.position = "relative";
document.body.appendChild(box);

function toPx(a) {
  return `${a}px`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Ball {
  constructor(x, y, r, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.width = r * 2;
    this.height = r * 2;
    this.vx = vx;
    this.vy = vy;
    this.ball = document.createElement("div");
    this.ball.style.backgroundColor =
      ballColors[getRandomInt(0, ballColors.length)];
    box.appendChild(this.ball);
  }

  create() {
    this.ball.style.width = `${this.width}px`;
    this.ball.style.height = `${this.height}px`;
    this.ball.style.position = "absolute";
    this.ball.style.top = toPx(this.y);
    this.ball.style.left = toPx(this.x);
    this.ball.style.borderRadius = "50%";
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

for (let i = 0; i < 100; i++) {
  let r = getRandomInt(10, 20);
  let x = getRandomInt(0, boxWidth - r * 2);
  let y = getRandomInt(0, boxHeight - r * 2);
  let vx = getRandomInt(-7, 7);
  let vy = getRandomInt(-7, 7);
  if (i !== 0) {
    for (let j = 0; j < balls.length; j++) {
      let obj = balls[j];
      if (isCollided(x + r, y + r, r, obj.x + obj.r, obj.y + obj.r, obj.r)) {
        x = getRandomInt(0, boxWidth - r * 2);
        y = getRandomInt(0, boxHeight - r * 2);
        j = -1;
      }
    }
  }

  const circle = new Ball(x, y, r, vx, vy);

  balls.push(circle);
}

function isCollided(x1, y1, r1, x2, y2, r2) {
  const square_dist = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  const square_radius = (r1 + r2) * (r1 + r2);
  if (square_dist < square_radius) {
    return true;
  } else {
    return false;
  }
}

function directionChange(ball1, ball2) {
  let collisionVector = {
    x: ball2.x - ball1.x,
    y: ball2.y - ball1.y,
  };

  let collisionVectorDist = Math.sqrt(
    (ball2.x - ball1.x) * (ball2.x - ball1.x) +
      (ball2.y - ball1.y) * (ball2.y - ball1.y)
  );

  let normalisedCollision = {
    x: collisionVector.x / collisionVectorDist,
    y: collisionVector.y / collisionVectorDist,
  };

  let relativeVelocity = {
    x: ball1.vx - ball2.vx,
    y: ball1.vy - ball2.vy,
  };

  let speed =
    relativeVelocity.x * normalisedCollision.x +
    relativeVelocity.y * normalisedCollision.y;

  return { speed, normalisedCollision };
}

function objectCollisionDetection() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      if (
        isCollided(
          balls[i].x + balls[i].r,
          balls[i].y + balls[i].r,
          balls[i].r,
          balls[j].x + balls[j].r,
          balls[j].y + balls[j].r,
          balls[j].r
        )
      ) {
        const { speed, normalisedCollision } = directionChange(
          balls[i],
          balls[j]
        );
        if (speed < 0) {
          break;
        } else {
          balls[i].vx -= speed * normalisedCollision.x;
          balls[i].vy -= speed * normalisedCollision.y;

          balls[j].vx += speed * normalisedCollision.x;
          balls[j].vy += speed * normalisedCollision.y;
        }
      }
    }
  }
}

function wallCollisionDetection() {
  balls.forEach((ball) => {
    if (ball.x < 0) {
      ball.vx = -ball.vx;
    } else if (ball.x + ball.width > boxWidth) {
      ball.vx = -ball.vx;
    }
    if (ball.y < 0) {
      ball.vy = -ball.vy;
    } else if (ball.y + ball.height > boxHeight) {
      ball.vy = -ball.vy;
    }
  });
}

function play() {
  balls.forEach((ball) => ball.create());
  balls.forEach((ball) => ball.update());
  objectCollisionDetection();
  wallCollisionDetection();

  window.requestAnimationFrame(play);
}

play();
