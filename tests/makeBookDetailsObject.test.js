const makeBookDetailsObject = require("../lib/makeBookDetailsObject");

test("makes an book object to pass to reply creator", function(){
  console.log(makeBookDetailsObject);

  const input = {
    "title": "NeuroTribes",
    "subtitle": "The Legacy of Autism and How to Think Smarter About People Who Think Differently",
    "authors": [
      "Steve Silberman"
    ],
    "publisher": "Atlantic Books",
    "publishedDate": "2017-01-01",
    "description": "Winner of the 2015 Samuel Johnson Prize for Non-Fiction Shortlisted for the Wellcome Book Prize A Sunday Times and New York Times bestseller Foreword by Oliver Sacks What is autism: a devastating developmental condition, a lifelong disability, or a naturally occurring form of cognitive difference akin to certain forms of genius? In truth, it is all of these things and more - and the future of our society depends on our understanding it. Following on from his groundbreaking article 'The Geek Syndrome', Wired reporter Steve Silberman unearths the secret history of autism, long suppressed by the same clinicians who became famous for discovering it, and finds surprising answers to the crucial question of why the number of diagnoses has soared in recent years. Going back to the earliest autism research and chronicling the brave and lonely journey of autistic people and their families through the decades, Silberman provides long-sought solutions to the autism puzzle while casting light on the growing movement of 'neurodiversity' and mapping out a path towards a more humane world for people with learning differences.",
    "industryIdentifiers": [
      {
        "type": "ISBN_13",
        "identifier": "9781925575507"
      },
      {
        "type": "ISBN_10",
        "identifier": "1925575500"
      }
    ],
    "pageCount": 534,
    "printType": "BOOK",
    "categories": [
      "Medical"
    ],
    "averageRating": 4,
    "ratingsCount": 19,
    "maturityRating": "NOT_MATURE",
    "language": "en",
    "id": "ik_CDQAAQBAJ",
    "link": "https://market.android.com/details?id=book-ik_CDQAAQBAJ",
    "thumbnail": "http://books.google.com/books/content?id=ik_CDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "images": {}
  };

  const run = makeBookDetailsObject(input);

  const expectedOutput = {
    "title": "NeuroTribes",
    "coverImage" : "http://books.google.com/books/content?id=ik_CDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "author" : "Steve Silberman"
  }

  expect(run).toEqual(expectedOutput);

  // TODO test where there are no authors

})
