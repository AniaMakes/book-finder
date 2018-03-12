const fs = require('node-fs-extra')

function processBookSearch(results){

  // With a callback:
  // fs.writeJson('./results.json', results , err => {
  //   if (err) return console.error(err)
  //
  //   console.log('success!')
  // })

  const resultsLength = results.length;
  let randomNumber = Math.floor(Math.random() * resultsLength);
  console.log(randomNumber);

  const randomBook = results[randomNumber];
  //console.log(randomBook);

  let outputBookInfo = {};

  outputBookInfo.title = randomBook.title;
  outputBookInfo.coverImage = randomBook.thumbnail;

  if (randomBook.authors){
    outputBookInfo.author = randomBook.authors[0];
  } else {
    outputBookInfo.author = "An Unknown Author";
  }

  console.log("BOOKS IN SERVER : ", outputBookInfo);

  return outputBookInfo;
}

module.exports = processBookSearch;
