const divide = require('../src/mominDivide.js');

test('division', () => {
  expect(divide(6, 3)).toBe(2);
});

test('division', () => {
  expect(divide(2, 1)).toBe(2);
});

describe('divide', () => {
  test('division', () => {
    expect(divide(4, 2)).toBe(2);
  });
  test('division', () => {
    expect(divide(5, 1)).toBe(5);
  });
});
