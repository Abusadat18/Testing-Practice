import {
  Calculator,
  analyzeArray,
  caesarCipher,
  capitalize,
  reverseString,
} from "./function.js";

test("Capitalize", () => {
  expect(capitalize("sadat")).toBe("Sadat");
  expect(capitalize("hi I am")).toBe("Hi I am");
  expect(capitalize("cOOL")).toBe("COOL");
});

test("Reverse a string", () => {
  expect(reverseString("apple")).toBe("elppa");
  expect(reverseString("yellow car")).toBe("rac wolley");
  expect(reverseString("madam")).toBe("madam");
  expect(reverseString("Madam")).toBe("madaM");
});

test("Calculator", () => {
  expect(Calculator.sum(1, 2)).toEqual(3);
  expect(Calculator.subtract(1, 2)).toEqual(-1);
  expect(Calculator.product(1, 2)).toEqual(2);
  expect(Calculator.divide(1, 2)).toBe(0.5);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("abcd", 0)).toBe("ABCD");
  expect(caesarCipher("abcd", 2)).toBe("CDEF");
  expect(caesarCipher("sadat", 3)).toBe("VDGDW");
  expect(caesarCipher("xyz", 3)).toBe("ABC");
  expect(caesarCipher("xyz", 0)).toBe("XYZ");
  expect(caesarCipher("xyza", 2)).toBe("ZABC");
  expect(caesarCipher("Hello Its me", 1)).toBe("IFMMP JUT NF");
  expect(caesarCipher("This is me!!", 7)).toBe("AOPZ PZ TL!!");
});

test("Analyze Given Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
