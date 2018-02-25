const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const charCoder = require('./lib/charCoder');
const isbnMaker = require('./lib/isbnMaker');
const fetchBook = require('./lib/fetchBook');
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
    console.log("BOOKS IN SERVER : ", results[0] );
    res.json(results[0]);

  });

});

app.listen(8080, function(){
  console.log("listening on port 8080");
});
