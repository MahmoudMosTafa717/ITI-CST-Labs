function wait5sec() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Do nothing
  }
  console.log("5 seconds have passed!");
}

function anotherWay() {
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    // Do nothing
  }
  console.log("5 seconds have passed!");
}

wait5sec();
