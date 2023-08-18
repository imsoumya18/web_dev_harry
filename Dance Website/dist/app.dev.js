"use strict";

var express = require("express");

var path = require("path");

var fs = require("fs");

var app = express();
var port = 2000; // EXPRESS SPECIFIC STUFF

app.use("/static", express["static"]("/static"));
app.use(express.urlencoded()); // PUG SPECIFIC STUFF

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // ENDPOINTS

app.get("/", function (req, res) {
  var params = {};
  res.status(200).render("index.pug", params);
}); // START THE SERVER

app.listen(port, function () {
  console.log("The application started successfully on port ".concat(port));
});