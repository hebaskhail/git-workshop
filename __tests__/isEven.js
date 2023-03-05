
const isEven = require('../src/isEven.js');
const isOdd = require('../src/isEven.js');

test('number is even', () => {
    expect(isEven(2)).toBe(true);
    });


    test('number is odd', () => {
        expect(isOdd(2)).toBe(true);
        });




test('number is odd', () => {
    expect(isEven(3)).toBe(false);
    }
);


describe('isEven', () => {
    test('number is even', () => {
        expect(isEven(2)).toBe(true);
        });
    test('number is odd', () => {
        expect(isEven(3)).toBe(false);
        }
    );
});
