let currentInput = "";

function EnterNumber(value) {
  let parts = currentInput.split(/[\+\-\*\/]/);
  let last = parts[parts.length - 1];

  currentInput += value;
  updateDisplay();
}

function EnterOperator(op) {
  if (currentInput === "") return;

  if (/[+\-*/]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1);
  }

  currentInput += op;
  updateDisplay();
}

function EnterEqual() {
  if (currentInput === "") return;

  let numbers = currentInput.split(/[\+\-\*\/]/).map(Number);

  let operators = currentInput.replace(/[0-9.]/g, "").split("");

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      // Division by zero check
      if (operators[i] === "/" && numbers[i + 1] === 0) {
        currentInput = "Error";
        updateDisplay();
        return;
      }

      let res =
        operators[i] === "*"
          ? numbers[i] * numbers[i + 1]
          : numbers[i] / numbers[i + 1];

      numbers.splice(i, 2, res);
      operators.splice(i, 1);
      i--;
    }
  }

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") result += numbers[i + 1];
    if (operators[i] === "-") result -= numbers[i + 1];
  }

  currentInput = result.toString();
  updateDisplay();
}

function EnterClear() {
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("Answer").value = currentInput;
}
