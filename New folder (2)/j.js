const rangeSlider = document.querySelectorAll('.range-slider');
const progress = document.querySelector('.range-slider__progress');

rangeSlider.forEach(slider => {
  slider.addEventListener('input', () => {
    const minValue = parseInt(rangeSlider[0].value);
    const maxValue = parseInt(rangeSlider[1].value);
    progress.style.left = `${minValue}%`;
    progress.style.width = `${maxValue - minValue}%`;
  });
});
