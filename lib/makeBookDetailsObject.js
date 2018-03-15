function makeBookDetailsObject(book){
 let outputBookInfo = {};

 outputBookInfo.title = book.title;
 outputBookInfo.coverImage = book.thumbnail;

 if (book.authors){
   outputBookInfo.author = book.authors[0];
 } else {
   outputBookInfo.author = "An Unknown Author";
 }

 console.log("MADE BOOK DETAILS", outputBookInfo);

 return outputBookInfo;

}

module.exports = makeBookDetailsObject;
