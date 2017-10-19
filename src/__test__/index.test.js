const calc = require('../index');
const doubleArray = calc.doubleArray;
const add = calc.add;
const positiveOnly = calc.positiveOnly;

describe('Calculator module', () => {
  describe('doubleArray', () => {
    it('should double an array', () => {
      const initialArray = [2, 4, 6];
      const expectedArray = [4, 8, 12];
      const result = doubleArray(initialArray);

      expect(result).toEqual(expectedArray);
    });
  });

  describe('add', () => {
    it('should sum two items', () => {
      const initialValueA = 2;
      const initialValueB = 4;
      const expectedSum = 6;

      const result = add(initialValueA, initialValueB);

      expect(result).toEqual(expectedSum);
    });
  });

  describe('subtract', () => {

  });

  describe('positiveOnly', () => {
    it('should return an array with positive numbers only', () => {
      const initialArray = [1, 2, -1, -2];
      const expectedArray = [1, 2];
      const result = positiveOnly(initialArray);

      expect(result).toEqual(expectedArray);
    });
  });
});
