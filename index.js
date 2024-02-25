//Initialization
const valueA = document.querySelector('.a');
const valueB = document.querySelector('.b');
const addBtn = document.querySelector('.add');
const minusBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const solution = document.querySelector('.solution');

// Event Listeners
addBtn.addEventListener('click', () => {
  const a = parseFloat(valueA.value);
  const b = parseFloat(valueB.value);
  const result = add(a, b);
  if (manageDecimals(result)) {
    solution.textContent = result;
  } else {
    solution.textContent = result.toFixed(2);
  }
});

minusBtn.addEventListener('click', () => {
  const a = parseFloat(valueA.value);
  const b = parseFloat(valueB.value);
  const result = subtract(a, b);
  if (manageDecimals(result)) {
    solution.textContent = result;
  } else {
    solution.textContent = result.toFixed(2);
  }
});

multiplyBtn.addEventListener('click', () => {
  const a = parseFloat(valueA.value);
  const b = parseFloat(valueB.value);
  const result = multiply(a, b);
  if (manageDecimals(result)) {
    solution.textContent = result;
  } else {
    solution.textContent = result.toFixed(2);
  }
});

divideBtn.addEventListener('click', () => {
  const a = parseFloat(valueA.value);
  const b = parseFloat(valueB.value);
  const result = divide(a, b);
  if (manageDecimals(result)) {
    solution.textContent = result;
  } else {
    solution.textContent = result.toFixed(2);
  }
});

// functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function manageDecimals(value) {
  if (Math.floor(value) === value) {
    return true;
  } else {
    return false;
  }
}
