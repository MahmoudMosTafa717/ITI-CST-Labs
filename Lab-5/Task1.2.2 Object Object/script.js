function dispVal(obj, key) {
  return obj[key];
}

const obj = { name: "Alice", age: 30 };

console.log(dispVal(obj, "name")); // "Alice"

console.log(dispVal(obj, "age")); // "30 years old"
