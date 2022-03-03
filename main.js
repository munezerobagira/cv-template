const randomilize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomizeColor = (ligthness = 0.2) => {
  return `hsl(${randomilize(0, 300)},${randomilize(140, 255)}%,${randomilize(
    0,
    100 * ligthness
  )}%)`;
};
const nameElement = document.getElementById("owner-name");
nameElement.addEventListener("click", () => {
  const randomColor = randomizeColor();
  document.body.style.setProperty("--primary-color", randomColor);
});
