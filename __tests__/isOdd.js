const isOdd = require('../src/isOdd');




test('number is even', () => {
  expect(isOdd(2)).toBe(false);
});







test('number is odd', () => {
  expect(isOdd(3)).toBe(true);
}
);


describe('isOdd', () => {
  test('number is even', () => {
    expect(isOdd(2)).toBe(false);
  });
  test('number is odd', () => {
    expect(isOdd(3)).toBe(true);
  }
  );
});
