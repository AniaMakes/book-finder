const books = require('google-books-search');

function bookSearch(searchString, callback){

  let options = {
      field: 'subject',
      offset: 0,
      limit: 40,
      type: 'books',
      order: 'relevance',
      lang: 'en'
  };

  books.search(searchString, options, function(error, results) {
    if (error) {
      return callback(error);
    }

    if (results.length > 0) {
      return callback(error, results);
    }

    options.field = "title";

    books.search(searchString, options, function(error, results){
      if (error) {
        return callback(error);
      }

      if (results.length > 0) {
        return callback(error, results);
      } else {
        return callback(error, results, 'No book found.')
      }
    });
  });
}

module.exports = bookSearch;
