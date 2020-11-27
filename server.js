const bodyParser = require("body-parser");
const https = require("https");
const express = require("express");
const app = express();

var favicon = require("serve-favicon")
var path = require("path")

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, function() {
  console.log("running on port 3000");
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get("/showcase", function(req, res) {
  res.sendFile(__dirname + "/showcase.html");
})

app.post("/", function(req, res) {
  res.redirect("/")
})

app.post("/showcase", function(req, res) {
  res.redirect("/showcase")
})
