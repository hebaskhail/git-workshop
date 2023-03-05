const removeWhiteSpaces = require('../src/removeWhiteSpaces');

test('expect to remove white spaces', () => {
  expect(removeWhiteSpaces('saad wadi ')).toEqual('saadwadi');
});
