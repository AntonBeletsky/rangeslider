const rangeSlider = document.querySelector('.range-slider__range');
const rangeValue = document.querySelector('.range-slider__value');

rangeSlider.addEventListener('input', () => {
  rangeValue.textContent = rangeSlider.value;
});
