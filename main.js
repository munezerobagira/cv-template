const randomilize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomizeColor = (lightness = 0.3) => {
  return `hsl(${randomilize(0, 360)},${randomilize(0, 100)}%,${randomilize(
    0,
    100 * lightness
  )}%)`;
};
const nameElement = document.getElementById("owner-name");
nameElement.addEventListener("click", () => {
  const randomColor = randomizeColor();
  document.body.style.setProperty("--primary-color", randomColor);
});
