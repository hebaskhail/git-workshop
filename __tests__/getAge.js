const getAge = require('../src/getAge');

test('person has age', () => {
    expect(getAge({ age: 20 })).toBe(20);
}
);

test('person has no age', () => {
    expect(getAge({})).toBe(null);
}
);

test('person is null', () => {
    expect(getAge(null)).toBe(null);
}
);

test('person with age 0', () => {
    expect(getAge({ age: 0 })).toBe(0);
});





