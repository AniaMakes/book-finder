const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bookSearch = require('./lib/google-book-search');

const Twit = require('twit');
const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,
})

let stream = T.stream('statuses/filter', {track: 'cook'})

stream.on('tweet', function (tweet){
  const tweetText = tweet.text;
  const username = tweet.user.screen_name;
  console.log(tweetText, username);
  console.log(generateReplyAndTweetIt(tweetText));
  console.log("------");
})

function generateReplyAndTweetIt (queryString){
  bookSearch(queryString, function(error, results, msg) {
    if (msg) {
      console.log(msg);
    }

  // bookSearch generates an array. If the array is empty, response is a string stating so. If it's not empty, book gets processed and spits out a book.
  let book;

  if (results && results.length > 0){
    console.log("1: ", results);
    book = processBookSearch(results);
  };

  if (book != undefined){
    console.log("2: ",book);
  }
});
}


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

    let book = processBookSearch(results);

    res.json(book);
  });

});

function processBookSearch(results){
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

  return outputBookInfo;
}


app.listen(8080, function(){
  console.log("listening on port 8080");
});
