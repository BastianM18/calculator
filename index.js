// SITE INTERACTIVITY

// html documents
const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

// click on numbers
numberButtons.forEach(button => {
  button.addEventListener('click', () => display.addnum(button.innerHTML));
});

// click on operation buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => display.compute(button.value));
});