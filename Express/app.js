const express = require("express");
const path = require("path");
const app = express();
port = 2000;

app.use("/static", express.static("static"));

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/demo", (req, res) => {
  res.status(200).render("demo", { title: "Demo", message: "This is demo content" });
});

app.get("/", (req, res) => {
  res.send("This is my Home");
});

app.get("/about", (req, res) => {
  res.send("This is my about");
});

app.post("/about", (req, res) => {
  res.send("This is my post request about");
});

app.get("/services", (req, res) => {
  res.send("This is my services");
});

app.get("/contact", (req, res) => {
  res.send("This is my contact");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
