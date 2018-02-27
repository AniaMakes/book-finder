const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const bookSearch = require('./lib/google-book-search');


// const fetch = require("node-fetch");
app.use(bodyParser.json());
app.set('view engine', 'hbs');

app.use('/static', express.static('static'));

app.get("/search", function(req, res){
  res.render("query", req.body);
});

app.post("/process-query", function(req, res){
  const input = req.body.input;

  console.log(input);

  bookSearch(input, function(error, results, msg) {
    if (msg) {
      console.log(msg);
    }

    const resultsLength = results.length;
    let randomNumber = Math.floor(Math.random() * resultsLength);

    const randomBook = results[randomNumber];
    console.log(randomBook);

    let outputBookInfo = {};

    outputBookInfo.title = randomBook.title;
    outputBookInfo.coverImage = randomBook.thumbnail;

    if (randomBook.authors){
      outputBookInfo.author = randomBook.authors[0];
    } else {
      outputBookInfo.author = "An Unknown Author";
    }

    console.log("BOOKS IN SERVER : ", outputBookInfo);

    res.json(outputBookInfo);

  });

});

app.listen(8080, function(){
  console.log("listening on port 8080");
});
