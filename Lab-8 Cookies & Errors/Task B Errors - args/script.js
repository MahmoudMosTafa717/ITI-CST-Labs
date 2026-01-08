function acceptTwoParams(a, b) {
  if (arguments.length !== 2) {
    throw new Error("Function must accept exactly 2 parameters");
  }

  return "Parameters accepted: " + a + " , " + b;
}

function addNumbers() {
  if (arguments.length === 0) {
    throw new Error("You must pass at least one number");
  }

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("All parameters must be numbers");
    }
    sum += arguments[i];
  }

  return sum;
}
