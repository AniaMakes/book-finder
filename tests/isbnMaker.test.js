const isbnMaker = require('../lib/isbnMaker');

describe('isbnMaker', function(){
  test("isbnMaker spits out 10 unit long string", function(){
    const testString1 = "6511010597";
    const testString2 = "10234";
    const testString3 = "73321081111181013212111111733";

    let outcome1 = isbnMaker(testString1);
    let outcome2 = isbnMaker(testString2);
    let outcome3 = isbnMaker(testString3);

    expect(outcome1.length).toBe(10);
    expect(outcome2.length).toBe(10);
    expect(outcome3.length).toBe(10);
  });
});
