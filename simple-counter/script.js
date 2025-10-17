let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  if (count === 0) {
    alert('Counter is already at zero');
  } else {
  count = 0;
  updateDisplay();
  }
});

function updateDisplay() {
  countDisplay.textContent = count;
}

