const processBookSearch = require("../lib/processBookSearch.js");
const neurotribes = require("./dummyData/resultsNeurotribes.json");
const seedrandom = require("seedrandom");

test.skip("process book search", function(){
  beforeEach(() => {
    Math.seedrandom('bookworm', { global: true });
  });

  const input1 = neurotribes;
  const runOn1 = processBookSearch(input1);

  const expected1 = {"author": "Eureka Books", "coverImage": "http://books.google.com/books/content?id=2fxtjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api", "title": "Neurotribes"}


  expect(runOn1).toEqual(expected1);
})
