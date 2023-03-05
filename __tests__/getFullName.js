const getFullName = require('../src/getFullName');

test('person has fullName', () => {
    expect(getFullName("ali", "alaa")).toBe("ali alaa");
}
);