const isEqual = require('../src/isEqual');

test('number is even', () => {
    expect(isEqual(2 , 2)).toBe(true);
    });