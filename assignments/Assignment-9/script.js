let dots = [];
let currentSlide = 0;

createIndicatorButtons();
next.addEventListener("click", () => {
  dots[currentSlide].classList.remove("indicator__active");

  if (currentSlide === maxlength - 1) {
    container.style.left = 0;
    currentSlide = 0;
    dots[currentSlide].classList.add("indicator__active");
    return;
  }

  nextslide = currentSlide;
  currentSlide += 1;

  changeSlide(
    nextslide,
    30,
    0.05,
    (nextslide, currentSlide) => nextslide >= currentSlide
  );
});

previous.addEventListener("click", () => {
  if (currentSlide === 0) return;

  dots[currentSlide].classList.remove("indicator__active");
  previousslide = currentSlide;
  currentSlide -= 1;

  changeSlide(
    previousslide,
    30,
    -0.05,
    (previousslide, currentSlide) => previousslide <= currentSlide
  );
});
