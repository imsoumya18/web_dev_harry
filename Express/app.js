const express = require("express");
const path = require("path");
const app = express();
port = 2000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = { title: "PUG is the best", content: "bekar content" };
  res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
