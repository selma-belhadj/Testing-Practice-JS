const reverseString = require('./reverseString');

test('the reverse string of \'Selma\' is amleS', () => {
  expect(reverseString("Selma")).toBe("amleS");
});