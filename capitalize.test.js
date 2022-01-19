const capitalize = require('./capitalize');

test('capitalize of 1st letter of \'salam\' is Salam', () => {
    expect(capitalize("salam")).toBe("Salam");
  });


  test('potatoes becomes Potatoes', () => {
    expect(capitalize('potatoes')).toBe('Potatoes');
  });


test('enter a string please not a number', () => {
    expect(() => {
        capitalize(123);
    }).toThrow();
  });


test('enter a string please not a boolean', () => {
    expect(() => {
        capitalize(true);
    }).toThrow();
  });

  test('enter a string please not a null', () => {
    expect(() => {
        capitalize(null);
    }).toThrow();
  });
  
  test('enter a string please not undefined', () => {
    expect(() => {
        capitalize(undefined);
    }).toThrow();
  });

  test('enter a string please not an object', () => {
    expect(() => {
        capitalize(new string("hello"));
    }).toThrow();
  });