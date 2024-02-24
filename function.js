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

function caesarCipher(str, shiftFactor) {
  const s = str.toUpperCase();
  const unicodeArr = [];
  for (let i = 0; i < s.length; i++) {
    let newCode = s.charCodeAt(i) + shiftFactor;
    if (newCode > 90) {
      let diff = newCode - 90;
      newCode = 64 + diff;
    } else if (newCode - shiftFactor === 32) {
      newCode = 32;
    } else if (newCode - shiftFactor === 33) {
      newCode = 33;
    }
    unicodeArr.push(newCode);
  }
  return String.fromCharCode(...unicodeArr);
}

export { capitalize, reverseString, Calculator, caesarCipher };
