const charCoder = require('../lib/charCoder');

describe('charCoder', function(){
  test('String transformed into a number string', function(){
      const expected1 = "6511010597";
      expect(charCoder("Ania")).toEqual(expected1);

      const expected2 = "73321081111181013212111111733";
      expect(charCoder("I love you!")).toEqual(expected2);
  });
});
