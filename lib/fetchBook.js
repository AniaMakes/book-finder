const fetch = require('node-fetch');


var fetchBook = function(isbn){
  return new Promise(function(resolve, reject){
    let url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    console.log(url);
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then (function(response){
      console.log("response: ");
      console.log(response);
      console.log(Object.keys(response));

      if (Object.keys(response)[0] == `ISBN:${isbn}`){
        const key = `ISBN:${isbn}`;
        const bookObject = response[key];

        let outputBook = {};
        outputBook.title = bookObject.title;
        outputBook.coverURL = bookObject.cover.small;
        outputBook.firstAuthor = bookObject.authors[0].name;

        console.log(outputBook);
      }

    })
    .catch(function (error){
      console.log(error);
    });


  });
};


module.exports = fetchBook;
