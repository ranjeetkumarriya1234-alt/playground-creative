const swatches = document.querySelectorAll('.swatch');
const canvas = document.querySelector('#canvas');
swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    swatches.forEach((item) => item.classList.remove('active'));
    swatch.classList.add('active');
    canvas.style.background = swatch.dataset.color;
  });
});
