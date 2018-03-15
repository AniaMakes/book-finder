const fs = require('node-fs-extra')
const makeBookDetailsObject = require("./makeBookDetailsObject");

const generateRandomNr = require("./generateRandomNr");

function processBookSearch(results){

  // With a callback:
  // fs.writeJson('./results.json', results , err => {
  //   if (err) return console.error(err)
  //
  //   console.log('success!')
  // })

  const resultsLength = results.length;
  let randomNumber = generateRandomNr(resultsLength);

  const randomBook = results[randomNumber];
  //console.log(randomBook);

  outputBookInfo = makeBookDetailsObject(randomBook);

  return outputBookInfo;
}

module.exports = processBookSearch;
