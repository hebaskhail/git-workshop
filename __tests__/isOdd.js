const isOdd = require('../src/isOdd.js');

test('number is not odd', () => {
    expect(isOdd(2)).toBe(false);
    });

test('number is  odd', () => {
        expect(isOdd(3)).toBe(true);
});