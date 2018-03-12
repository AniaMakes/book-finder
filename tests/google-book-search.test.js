const bookSearch = require('../lib/google-book-search');

describe("bookSearch", function(){
  it("checks output is an array", function(){
    let outcome = bookSearch("NeuroTribes");
    let item = {
      "title": "Summary, Analysis & Review of Steve Silberman’s NeuroTribes by Eureka",
      "subtitle": "",
      "authors": [
        "Eureka"
      ],
      "publisher": "Eureka",
      "publishedDate": "2015-10-05",
      "description": "Summary, Analysis & Review of Steve Silberman’s NeuroTribes by Eureka PLEASE NOTE: THIS IS A COMPANION TO THE BOOK AND NOT THE ORIGINAL BOOK. NeuroTribes: The Legacy of Autism and the Future of Neurodiversity seeks to unearth what autism is and why it remains a mystery. Hans Asperger, a researcher and pediatrician working at the University of Vienna, first identified the disorder as occurring in many different forms and severities on a spectrum and saw the link between autism and high intelligence in areas such as music and mathematics. He called his patients little professors… This companion to Summary, Analysis & Review of Steve Silberman’s NeuroTribes by Eureka includes:Overview of the bookImportant PeopleKey TakeawaysAnalysis of Key Takeawaysand much more!",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9781944195113"
        },
        {
          "type": "ISBN_10",
          "identifier": "1944195114"
        }
      ],
      "pageCount": 32,
      "printType": "BOOK",
      "categories": [
        "Study Aids"
      ],
      "maturityRating": "NOT_MATURE",
      "language": "en",
      "id": "6oaoCgAAQBAJ",
      "link": "https://market.android.com/details?id=book-6oaoCgAAQBAJ",
      "thumbnail": "http://books.google.com/books/content?id=6oaoCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "images": {}
    }

    expect(outcome).toContain(item);

  })

})
