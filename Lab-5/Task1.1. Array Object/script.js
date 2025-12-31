const n = parseInt(prompt("Enter the number of values:"));
const arr = [];

for (let i = 0; i < n; i++) {
  const value = parseInt(prompt(`Enter value ${i + 1}:`));
  arr.push(value);
}

console.log("Original array:", arr);

const ascendingArr = arr.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendingArr);

const descendingArr = arr.slice().sort((a, b) => b - a);
console.log("Descending order:", descendingArr);
