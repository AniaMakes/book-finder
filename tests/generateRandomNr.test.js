const generateRandomNr = require("../lib/generateRandomNr");

test("generates number number given ceiling", function(){
  const run1 = generateRandomNr(10);
  const run2 = generateRandomNr(1);

  expect(run2).toBe(0);
  //TODO look up jest rules for range

})
