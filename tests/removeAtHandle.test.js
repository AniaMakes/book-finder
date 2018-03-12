const removeAtHandle = require("../lib/removeAtHandle.js");


test("remove at handle", function(){

  const string1 = "@Ania @Bob we are here";
  const string2 = "who is there?";
  const string3 = "Ania and Bob @Marcie is here";
  const string4 = "Alpha @Bravo @Charlie @Delta Echo"

  const runOn1 = removeAtHandle(string1);
  const runOn2 = removeAtHandle(string2);
  const runOn3 = removeAtHandle(string3);
  const runOn4 = removeAtHandle(string4);


  const result1 = "we are here";
  const result2 = "who is there";
  const result3 = "Ania and Bob is here";
  const result4 = "Alpha Echo";

  expect(runOn1).toEqual(result1);
  expect(runOn2).toEqual(result2);
  expect(runOn3).toEqual(result3);
  expect(runOn4).toEqual(result4);


})
