import { Calculator, capitalize, reverseString } from "./function.js";

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
