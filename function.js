function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const Calculator = (() => {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const product = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { sum, subtract, product, divide };
})();

export { capitalize, reverseString, Calculator };
