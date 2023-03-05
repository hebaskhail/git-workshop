const Multiplication = require("../src/Multiplication");

test("Multiplication any number in 0 will be 0", () => {
  expect(Multiplication(1, 0)).toBe(0);
});

test("Multiplication any number in 1 will be other number", () => {
  expect(Multiplication(10, 1)).toBe(10);
});

describe("Multiplication", () => {
  test("Multiplication any number in 0 will be 0", () => {
    expect(Multiplication(1, 0)).toBe(0);
  });

  test("Multiplication any number in 1 will be other number", () => {
    expect(Multiplication(10, 1)).toBe(10);
  });
});
