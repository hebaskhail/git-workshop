const isEqual = require('../src/isEqual');

test('number is equal', () => {
    expect(isEqual(2 , 2)).toBe(true);
    });