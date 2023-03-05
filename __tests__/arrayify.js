const arrayify = require('../src/arrayify');

test('arrayify when pass array parameter', () => {
    expect(arrayify([1, 2, 3])).toEqual([1, 2, 3]);
});

test('arrayify when pass string parameter', () => {
    expect(arrayify('abc')).toEqual(['abc']);
})

test('arrayify when no parameter', () => {
    expect(arrayify()).toEqual([]);
})


