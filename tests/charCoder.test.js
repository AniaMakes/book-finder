const charCoder = require('../lib/charCoder');

describe('charCoder', function(){
  test('String transformed into a number string', function(){
      const expected1 = "6511010597"
      expect(charCoder("Ania")).toEqual(expected1);
  });
});
