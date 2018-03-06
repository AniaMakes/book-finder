const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bookSearch = require('./lib/google-book-search');

// TWIT -----------------------------
const Twit = require('twit');
const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,
});

let stream = T.stream('statuses/filter', {track: '@gimme_book'});

// stream.on('tweet', function (tweet){
//   const tweetText = tweet.text;
//   const username = tweet.user.screen_name;
//   console.log(tweetText, username);
//   const queryText = removeAtHandle(tweetText);
//   console.log(queryText);
//
//   searchAndGenerateReply(queryText, function(error, reply) {
//     console.log('error', error);
//     // reply is the actual stuff we want to tweet back
//     console.log('reply', reply);
//
//     tweetReply(username, reply);
//
//     console.log("------");
//   });
// });
//
// function tweetReply (username, replyText){
//   T.post('statuses/update', {status :`@${username} ${replyText}`}, function(err, data, response){
//     console.log(data);
//   });
// }

// ----------------------------------
// let twitter = require("twitter");
//
// const tweet = new twitter({
//   consumer_key:         process.env.CONSUMER_KEY,
//   consumer_secret:      process.env.CONSUMER_SECRET,
//   access_token:         process.env.ACCESS_TOKEN,
//   access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
//   timeout_ms:           60*1000,
// });
app.get("/men-time", function(req, res){
  T.get('/statuses/mentions_timeline', { count: 10}, function(error, data){
   console.log("Mentions timeline: ", data);
   res.json(data);
  });
})
// -----------------------------------

function removeAtHandle(text){
  let textArr = text.split(" ");

  textArr.forEach(function(word, index){
    if (word == "@gimme_book"){
      textArr[index] = "";
    }
  });

  let preRegExStr = textArr.join(" ");
  let postRegExStr = preRegExStr.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/g, "");

  return postRegExStr;
}


function searchAndGenerateReply (queryString, cb){
  bookSearch(queryString, function(error, results, msg){
    generateReply(error, results, msg, cb);
  });
}

function generateReply(error, results, msg, cb) {
  // bookSearch generates an array. If the array is empty, response is a string stating so. If it's not empty, book gets processed and spits out a book.
  let book;
  let text;

  if (results && results.length > 0){
    book = processBookSearch(results);
    const {title, author} = book;
    text = `Our book recommendation for you is "${title}" by ${author}.`;
  }
  else {
    text =  "No book found.";
  }

  if (msg) {
    text = msg;
  }

  cb(error, text);
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


app.listen(process.env.PORT, function(){
  console.log("listening on port 8080");
});
