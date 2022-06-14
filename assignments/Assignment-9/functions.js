function createIndicatorButtons() {
  for (let i = 0; i < maxlength; i++) {
    const dot = document.createElement("div");
    dot.classList.add("indicator");

    dot.addEventListener("click", () => {
      dots[currentSlide].classList.remove("indicator__active");
      currentSlide = i;
      dots[currentSlide].classList.add("indicator__active");
      container.style.left = -currentSlide * 800 + "px";
    });

    dots.push(dot);
    if (i === 0) dots[currentSlide].classList.add("indicator__active");
    indicator.appendChild(dot);
  }
}

function changeSlide(nextIdx, interval, increment, check) {
  toggleButton(false);
  const id = setInterval(() => {
    nextIdx += increment;
    nextIdx = parseFloat(nextIdx.toFixed(4));
    container.style.left = -nextIdx * 800 + "px";

    if (check(nextIdx, currentSlide)) {
      dots[currentSlide].classList.add("indicator__active");
      clearInterval(id);
      toggleButton(true);
    }
  }, interval);
}

function toggleButton(enable) {
  if (enable) {
    next.style.pointerEvents = "auto";
    previous.style.pointerEvents = "auto";
  } else {
    next.style.pointerEvents = "none";
    previous.style.pointerEvents = "none";
  }
}
