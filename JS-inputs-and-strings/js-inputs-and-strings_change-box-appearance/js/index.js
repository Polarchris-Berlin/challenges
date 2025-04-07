console.clear();

const colorSlider = document.querySelector('[data-js="input-color"]');
const borderSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorSlider.addEventListener("input", (event) => {
  const hue = event.target.value;
  const newColor = `hsl(${hue}, 100%, 50%)`;
  box.style.backgroundColor = newColor;
});

borderSlider.addEventListener("input", (event) => {
  const radius = event.target.value;
  const max = event.target.max;
  box.style.borderRadius =
    parseInt(radius) === parseInt(max) ? "50%" : `${radius}px`;
});

rotationSlider = addEventListener("input", (event) => {
  const rotation = event.target.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
