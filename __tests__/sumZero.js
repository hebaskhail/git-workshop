const sumZero = require('../src/sumZero');

test('the array has sum of Zero', () => {
    expect(sumZero([-2,-1,0,1,2])).toEqual([-2,2]);
}); 

