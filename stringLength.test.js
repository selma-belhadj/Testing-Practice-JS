const stringLength = require('./stringLength');

test('length of \'Salam\' is 5', () => {
  expect(stringLength("Salam")).toBe(5);
});

test('length of \'S\' is 1', () => {
    expect(stringLength("S")).toBe(1);
  });

test('length of \'\' is Conditions not met', () => {
    expect(stringLength("")).toBe('Conditions not met');
  });

test('length of \'Hello Selma\' is Conditions not met', () => {
    expect(stringLength("Hello Selma")).toBe('Conditions not met');
  });