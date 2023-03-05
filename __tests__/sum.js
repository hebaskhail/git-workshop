const sum =  require('../src/sum');

test('sum of single number is that number', () => {
    expect(sum(1)).toBe(1);
    }
);

test('sum of two numbers is their sum', () => {
    expect(sum(1, 2)).toBe(3);
    });

test('sum of many numbers is their sum', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

test('sum of no numbers is 0', () => {
    expect(sum()).toBe(0);
    }
);



describe('sum', () => {
    test('sum of single number is that number', () => {
        expect(sum(1)).toBe(1);
        }
    );
    test('sum of two numbers is their sum', () => {
        expect(sum(1, 2)).toBe(3);
        });
    test('sum of many numbers is their sum', () => {
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        });
    test('sum of no numbers is 0', () => {
        expect(sum()).toBe(0);
        }
    );
});





