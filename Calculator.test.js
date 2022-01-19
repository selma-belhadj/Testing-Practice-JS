const calculator = require('./Calculator');


describe('add', () => {
    test('addition of 1 + 3 is 4', () => {
      expect(calculator.add(1, 3)).toBe(4);
  });

    test('addition of 0 + 30 is 30', () => {
    expect(calculator.add(0,30)).toBe(30);
  });

    test('addition of 135 + 2 is 137', () => {
    expect(calculator.add(135,2)).toBe(137);
  });

    test('addition of 11 + 11 is 22', () => {
    expect(calculator.add(11,11)).toBe(22);
  });
});


describe('subtract', () => {
    test('33 - 2 = 31', () => {
      expect(calculator.subtract(33, 2)).toBe(31);
    });
  
    test('-5 - -4 = -1', () => {
      expect(calculator.subtract(-5, -4)).toBe(-1);
    });
  
    test('200 - 23 = 9987', () => {
      expect(calculator.subtract(23000, 13013)).toBe(9987);
    });
  });

describe('multiply', () => {
    test('45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });
  
    test('7 * 7 = 49', () => {
      expect(calculator.multiply(7, 7)).toBe(49);
    });
  
    test('0 * 9 = 0', () => {
      expect(calculator.multiply(0, 9)).toBe(0);
    });
  });

describe('divide', () => {
    test('60 / 2 = 30', () => {
      expect(calculator.divide(60, 2)).toBe(30);
    });
  
    test('90 / 10 = 9', () => {
      expect(calculator.divide(90, 10)).toBe(9);
    });
  
    test('1000 / 500 = 2', () => {
      expect(calculator.divide(1000, 500)).toBe(2);
    });
  });