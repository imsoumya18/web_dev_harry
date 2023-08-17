"use strict";

var express = require("express");

var path = require("path");

var app = express();
port = 2000;
app.use("/static", express["static"]("static"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/demo", function (req, res) {
  res.status(200).render("demo", {
    title: "Demo",
    message: "This is demo content"
  });
});
app.get("/", function (req, res) {
  res.send("This is my Home");
});
app.get("/about", function (req, res) {
  res.send("This is my about");
});
app.post("/about", function (req, res) {
  res.send("This is my post request about");
});
app.get("/services", function (req, res) {
  res.send("This is my services");
});
app.get("/contact", function (req, res) {
  res.send("This is my contact");
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});