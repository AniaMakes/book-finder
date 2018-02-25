const fetchBook = require('../lib/fetchBook');

describe('fetchBook', function(){
  test('gets book for valid isbn', function(){
      const isbn = '0385472579';
      const book = fetchBook(isbn).then(function(result){
        const expected = `{
          title: 'Zen speaks',
          coverURL: 'https://covers.openlibrary.org/b/id/240726-S.jpg',
          firstAuthor: 'Zhizhong Cai' }`;


        // console.log(book);

        expect(result).toEqual(JSON.parse(expected));
      });
  });
});
