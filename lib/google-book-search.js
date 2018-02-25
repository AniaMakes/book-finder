const books = require('google-books-search');

function bookSearch(searchString){

  let options = {
      field: 'subject',
      offset: 0,
      limit: 40,
      type: 'books',
      order: 'relevance',
      lang: 'en'
  };

  books.search(searchString, options, function(error, results, apiResponse) {
      if ( ! error ) {
        if (results.length === 0){
          options.field = "title";

          books.search(searchString, options, function(error, results, apiResponse){
            if (! error){
              if(results.length === 0){
                return "Sorry, try again";
              }
              else{
                console.log(results);
              }
            }
            else {
              console.log(error);
            }
          });
        }
        else {
          console.log(results);
        }    
      } else {
          console.log(error);
      }
  });
}

module.exports = bookSearch;
