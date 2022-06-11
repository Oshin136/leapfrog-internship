var positions = [
  [100, 20],
  [400, 300],
  [600, 200],
  [100, 400],
  [200, 200],
  [50, 700],
  [800, 90],
  [300, 300],
];

const balls = [];

const box = document.createElement("div");
box.style.width = window.innerWidth;
box.style.height = window.innerHeight;
box.style.border = "1px solid black";
box.style.position = "relative";
document.body.appendChild(box);

class CreateBall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  create() {
    const ball = document.createElement("div");

    ball.style.width = "30px";
    ball.style.height = "30px";
    ball.style.border = "1px solid red";
    ball.style.position = "absolute";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "red";
    ball.style.top = `${this.x}px`;
    ball.style.left = `${this.y}px`;

    ball.addEventListener("click", function () {
      console.log(ball);
      document.body.removeChild(ball);
    });

    document.body.appendChild(ball);
  }
}

for (let i = 0; i < positions.length; i++) {
  const circle = new CreateBall(positions[i][0], positions[i][1]);
  balls.push(circle);
}

balls.forEach((ball) => {
  ball.create();
});
