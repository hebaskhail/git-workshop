const factorial = require("../src/factorial.js");

test("the factorial of 2 is 2 ", () => {
  expect(factorial(2)).toBe(2);
});
