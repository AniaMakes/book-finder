const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const fetch = require("node-fetch");
app.use(bodyParser.json());
app.set('view engine', 'hbs');

app.use('/static', express.static('static'));

app.get("/search", function(req, res){
  res.render("query", req.body);
});

app.post("/process-query", function(req, res){
  console.log(req.body.input);
});

app.listen(8080, function(){
  console.log("listening on port 8080");
});
