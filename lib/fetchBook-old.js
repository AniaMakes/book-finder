const fetch = require('node-fetch');
const isbnUtils = require('isbn-utils');

function fetchBook(isbn){

  const isbn10 = isbnUtils.parse(isbn);

  if (isbn10 == null){
    console.log("No matching book");
    console.log("incoming ISBN :", isbn);

    const incomingISBN = isbn;
    const incomingISBNarray = [...isbn];

    const jumbledISBN = randomise(incomingISBNarray).join("");

    fetchBook(jumbledISBN);
  }

   else if (isbn10.isIsbn10()){
    let url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then (function(response){
      // console.log("response: ");
      // console.log(response);
      //
      // if (Object.keys(response)[0] == `ISBN:${isbn}`){
        const key = `ISBN:${isbn}`;
        const bookObject = response[key];

        let outputBook = {};
        outputBook.title = bookObject.title;
        outputBook.coverURL = bookObject.cover.small;
        outputBook.firstAuthor = bookObject.authors[0].name;

        console.log(outputBook);

        return outputBook;
    }
    .catch(function (error){
      console.log(error);
    }));
}

  else {
    console.log("No matching book");
    console.log("incoming ISBN :", isbn);

    const incomingISBN = isbn;
    const incomingISBNarray = [...isbn];

    const jumbledISBN = randomise(incomingISBNarray).join("");

    fetchBook(jumbledISBN);
  }
};



function randomise(arrayOfDigits) {
  var currentIndex = arrayOfDigits.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arrayOfDigits[currentIndex];
    arrayOfDigits[currentIndex] = arrayOfDigits[randomIndex];
    arrayOfDigits[randomIndex] = temporaryValue;
  }
  return arrayOfDigits;
}



module.exports = fetchBook;
